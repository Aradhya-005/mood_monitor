import Link from "next/link";
import { Spotlight } from "./Spotlight";
import { Button } from "../ui/moving-border";


function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md  flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 w-full mt-16 text-center ">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-400">
          Track Your Mental Health
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto ">
          Take control of your mental well-being with our comprehensive tracking
          tools and resources. Start your journey to better mental health today.
        </p>
        <div className="mt-10 ">
          <Link href={"/signup"}>
            <Button
              borderRadius="1.70rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
