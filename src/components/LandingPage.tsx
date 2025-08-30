import type { Component } from "solid-js";
import UrlDisplay from "./UrlDisplay";
import AlertBox from "./AlertBox";
const LandingPage: Component = () => {
  const urls = [
    {
      description: "Github",
      link: "https://github.com/darenkeck-dev",
      imageSrc: "/images/github-mark-white.svg",
    },
    {
      description: "Soundcloud",
      link: "https://soundcloud.com/darenkeck",
      imageSrc: "/images/soundcloud.png",
    },
    {
      description: "Wayfarer Music Group",
      link: "https://wayfarermusicgroup.com/dir",
      imageSrc: "/images/wayfarer_music_group.webp",
    },
  ];

  return (
    <div>
      <img
        src="/images/written_title_700.png"
        alt="written_title"
        class="relative z-10 -mb-5 mr-2 w-64 ml-auto"
      ></img>
      <div class="shadow-md dark:bg-slate-800 py-8 px-8 max-w-md mx-auto rounded-xl">
        <h1 class="text-3xl font-bold">Hey!</h1>
        <p class="py-4">
          This is my personal page. I program at DEPT© and write music at
          Wayfarer Records!
        </p>
        <p>I'll occasionally link up fun projects here as well.</p>
        <AlertBox>
          <p class="text-middle py-2">
            My collaboration{" "}
            <a
              class="font-semibold text-yellow-400"
              href="https://wayfarermusicgroup.com/dir/shadow-dance-is-now-available/"
            >
              Shadow Dance
            </a>{" "}
            is available now! This is a collaboration with the talented{" "}
            <a class="text-yellow-400" href="https://billydenk.com">
              Billy Denk
            </a>
            . Check it out at{" "}
            <a
              class="text-yellow-400"
              href="https://wayfarermusicgroup.bandcamp.com/track/shadow-dance"
            >
              bandcamp
            </a>{" "}
            or your favorite streaming platform.
          </p>
        </AlertBox>
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
    </div>
  );
};

export default LandingPage;
