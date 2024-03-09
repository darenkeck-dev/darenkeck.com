import type { Component } from "solid-js";
import UrlDisplay from "./UrlDisplay";

const LandingPage: Component = () => {
  const description = `This is my personal page. I program at DEPT© and write music at Wayfarer Records!

  I'll occasionally link up fun projects here as well.
  `;
  const urls = [
    {
      description: "Github",
      link: "https://github.com/darenkeck-dev",
      imageSrc: "/src/assets/github-mark-white.svg",
    },
    {
      description: "Soundcloud",
      link: "https://soundcloud.com/darenkeck",
      imageSrc: "/src/assets/soundcloud.png",
    },
  ];

  return (
    <div class="shadow-md dark:bg-slate-800 py-8 px-8 max-w-md mx-auto rounded-xl">
      <h1 class="text-3xl font-bold">Hey!</h1>
      <p class="py-4">{description}</p>
      <div>
        {urls.map((url) => (
          <UrlDisplay
            description={url.description}
            imageSrc={url.imageSrc}
            link={url.link}
          ></UrlDisplay>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
