import { createSignal, onCleanup, onMount } from "solid-js";

type Star = {
  x: number;
  y: number;
  z: number;
  velocity: number;
  prevX: number;
  prevY: number;
};

const Starfield = () => {
  let canvas: HTMLCanvasElement | undefined;
  let ctx: CanvasRenderingContext2D | null;
  const [stars, setStars] = createSignal<Star[]>([]);
  const starCount = 100;
  let frame = 0;

  const initializeStars = () => {
    const starArray: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      starArray.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * window.innerWidth,
        velocity: 1 + Math.random() * 2,
        prevX: 0,
        prevY: 0,
      });
    }
    setStars(starArray);
  };

  const updateStars = () => {
    const starArray = stars().map((star) => {
      const velocity = star.velocity * (2 + Math.sin(frame / 50));
      star.prevX =
        (star.x - window.innerWidth / 2) * (window.innerWidth / star.z) +
        window.innerWidth / 2;
      star.prevY =
        (star.y - window.innerHeight / 2) * (window.innerWidth / star.z) +
        window.innerHeight / 2;
      star.z -= velocity;
      if (star.z <= 0) {
        star.x = Math.random() * window.innerWidth;
        star.y = Math.random() * window.innerHeight;
        star.z = window.innerWidth;
        star.velocity = 1 + Math.random() * 2;
        star.prevX = star.x;
        star.prevY = star.y;
      }
      return star;
    });
    setStars(starArray);
    frame++;
  };

  const drawStars = () => {
    if (ctx) {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      stars().forEach((star) => {
        const x =
          (star.x - window.innerWidth / 2) * (window.innerWidth / star.z) +
          window.innerWidth / 2;
        const y =
          (star.y - window.innerHeight / 2) * (window.innerWidth / star.z) +
          window.innerHeight / 2;
        const radius = window.innerWidth / star.z / 2;

        // Draw trail
        const trailLength = Math.min(30, 10 * star.velocity);
        for (let i = 0; i < trailLength; i++) {
          const trailX = star.prevX + (x - star.prevX) * (i / trailLength);
          const trailY = star.prevY + (y - star.prevY) * (i / trailLength);
          const opacity = 1 - i / trailLength;
          ctx!.beginPath();
          ctx!.arc(trailX, trailY, radius, 0, 2 * Math.PI);
          ctx!.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx!.fill();
        }

        // Draw star
        ctx!.beginPath();
        ctx!.arc(x, y, radius, 0, 2 * Math.PI);
        ctx!.fillStyle = "white";
        ctx!.fill();
      });
    }
  };

  const animate = () => {
    updateStars();
    drawStars();
    requestAnimationFrame(animate);
  };

  const handleResize = () => {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    initializeStars();
  };

  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext("2d");
      handleResize();
      animate();
    }

    window.addEventListener("resize", handleResize);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
  });

  return (
    <canvas
      ref={canvas}
      class="absolute top-0 left-0 w-full h-full block bg-black"
    ></canvas>
  );
};

export default Starfield;
