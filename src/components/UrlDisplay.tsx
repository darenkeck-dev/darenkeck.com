import type { Component, JSX } from "solid-js";

interface UrlDisplayProps {
  description: string;
  link: string;
  imageSrc: string;
}

// TODO: add hover, description and url? or icon?
const UrlDisplay: Component<UrlDisplayProps> = (props: UrlDisplayProps) => {
  return (
    <div class="flex justify-between items-center p-4 transition-all ease-in-out duration-300 hover:bg-gray-600 hover:text-slate">
      <div class="flex-1 p-2 pr-12">{props.description}</div>
      <div class="w-16 mx-h-1/2">
        <img src={props.imageSrc} class="w-10"></img>
      </div>
    </div>
  );
};

export default UrlDisplay;
