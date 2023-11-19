import Image from "next/image";
import { HeroHeadingAB } from "@/app/(landing)/home/HeroHeadingAB";
import { CTAButtons } from "@/app/(landing)/home/CTAButtons";
import { SquaresPattern } from "@/app/(landing)/home/SquaresPattern";
import { VideoDemo } from "@/app/(landing)/home/VideoDemo";

export function HeroText(props: { children: React.ReactNode }) {
  return (
    <h1 className="font-cal text-4xl text-gray-900 sm:text-6xl" {...props} />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return <p className="mt-6 text-lg leading-8 text-gray-600" {...props} />;
}

export function Hero() {
  return (
    <div className="relative pt-14">
      <SquaresPattern />
      <div className="pt-24 sm:pb-12 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <HeroText>
              <HeroHeadingAB />
            </HeroText>
            <HeroSubtitle>
              Inbox Zero puts you back in control of your inbox. Understand what
              {"'"}s filling up your inbox with our email analytics. One-click
              unsubscribe from newsletters. Automate replies and answer your
              users in seconds.
            </HeroSubtitle>
            <CTAButtons />
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/images/mail.png"
                alt="Inbox screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />

              <VideoDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
