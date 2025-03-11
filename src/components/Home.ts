import { createElement, VNode } from "../utils/vdom.js";
import { Component } from "../utils/types.js";
import { ApiService } from "../services/api.js";
import { useState } from "../core/core.js";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class Home implements Component {
  private onDataUpdated: () => void;

  private posts: () => Post[];
  private setPosts: (value: Post[]) => void;
  private isLoading: () => boolean;
  private setIsLoading: (value: boolean) => void;

  constructor(onDataUpdated: () => void) {
    this.onDataUpdated = onDataUpdated;
    [this.posts, this.setPosts] = useState<Post[]>([]);
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);

    this.fetchPosts();
  }

  async fetchPosts(): Promise<void> {
    try {
      this.setIsLoading(true);
      const posts = await ApiService.getPosts();
      this.setPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setTimeout(() => {
        this.setIsLoading(false);
        this.onDataUpdated();
      }
      , 3000);
      // this.setIsLoading(false);
      // this.onDataUpdated();
    }
  }
  render(): VNode {
    return {

      tag: "div",
      props: { class: "container mx-auto p-4" },
      children: [
        this.isLoading() ? this.Loading() : {
          tag: "div",
          props: {class: "grid grid-cols-3 gap-4"},
          children: this.posts().map((post) => this.Card(post)),
        },
      ],
      
    }
  }
  handleClick(post: Post): void
  {
    console.log("Post clicked:", post);
  }

  Loading(): VNode
  {
    return {
      tag: "div",
      props: { class: "text-center" },
      children: [
        {
          tag: "svg",
          props: { class: "animate-spin h-5 w-5 mr-3", viewBox: "0 0 24 24" },
          children: [
            {
              tag: "circle",
              props: { class: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" },
              children: [],
            },
            {
              tag: "path",
              props: { class: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V2.5" },
              children: []
            },
          ],
        },
        {
          tag: "p",
          props: { class: "text-gray-600" },
          children: ["Loading..."],
        },
      ],
    };
    
  }

  Card(post: Post): VNode
  {
    return {
      tag:"div",
      props: {
        class: "card bg-white rounded-lg shadow-md p-4 m-2",
        onclick: () => this.handleClick(post)

      },
      children:[
        {
          tag: "h2",
          props: {class: "text-xl font-semibold"},
          children: [post.title]
        },
        {
          tag: "p",
          props: {class: "text-gray-600"},
          children: [post.body]
        },
        {
          tag: "p",
          props: {class: "text-gray-600"},
          children: ["User ID: ", String(post.userId)]
        },
        {
          tag:"div",
          props: {class: "flex justify-end"},
          children:[`Post Id: ${post.id}`]
        }
      ]
    }
  }
}
