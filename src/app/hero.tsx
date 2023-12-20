"use client";

import { IconButton, Button, Avatar, Typography } from "@material-tailwind/react";
//import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
   
          <img
      className="rounded-3xl object-cover object-center"
      src="/image/oswald.png"
      alt="Oswald Corbett Portrait"
    />
        <Typography variant="h3" color="white" className="mb-2" children={undefined} placeholder={undefined}>
          Oswald Corbett<br />Upcoming Indie Author
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl" children={undefined} placeholder={undefined}>
          Website Coming Soon!
        </Typography>
        
      </div>
    </div>
  </div>
  );
}

export default Hero;
