import { animate, stagger } from "motion";
import type { Action } from "svelte/action";

export const staggeredLinks: Action<HTMLUListElement> = (node) => {
  $effect(() => {
    const links = node.querySelectorAll("li");

    animate(
      links,
      {
        x: [-100, 0],
        opacity: [0, 1],
      },
      { duration: 1, delay: stagger(0.2) },
    );
  });
};
