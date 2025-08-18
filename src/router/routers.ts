import { createRouter, createWebHistory } from "vue-router";

interface TRouter {
  path: string;
  component: any;
  children?: TRouter[];
}

const routes: TRouter[] = [
];