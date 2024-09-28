import React from "react";

export type SlowPostProps = {
  prefix: string;
  index: number;
};

export function SlowPost(props: SlowPostProps) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      {props.prefix} #{props.index + 1}
    </li>
  );
}

export type PostsTabProps = {
  prefix: string;
};

export function PostsTab(props: PostsTabProps) {
  // Log once. The actual slowdown is inside SlowPost.
  console.log("[ARTIFICIALLY SLOW] Rendering 2048 <SlowPost />");

  const items = [];
  for (let i = 0; i < 2048; i++) {
    items.push(<SlowPost key={i} prefix={props.prefix} index={i} />);
  }

  return <ul className="items max-h-[400px] overflow-y-auto">{items}</ul>;
}
