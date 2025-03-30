"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const HomeScreen = () => {
  return (
    <section className="py-5 lg:py-10 xl:py-12">
      <div className="container ">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full ">
          <div className="col-span-1 leading-[1.1]">
            <h1 className="font-primary text-4xl lg:text-4xl xl:text-7xl font-bold ">
              Get Referral.
            </h1>
            <h1 className="font-primary text-4xl lg:text-4xl xl:text-7xl font-bold ">
              Share Referral.
            </h1>
            <h1 className="font-primary text-4xl lg:text-4xl xl:text-7xl font-bold ">
              All in one place.
            </h1>

            <div className="border-l-[0.8vh] border-purple-700 px-5 mt-10">
              <p className="font-secondary  text-xl xl:text-2xl text-black/80 dark:text-white/80 font-bold">
                🚀 COMING SOON
              </p>
              <p className="font-secondary font-normal text-xl xl:text-2xl text-greyText dark:text-gray-300 pt-5">
                OneXReferral is your go-to platform for getting and sharing job
                referrals effortlessly. Whether you&apos;re looking to land your
                dream job or help others get hired, we make the referral process
                seamless and efficient. Join the waitlist and be the first to
                experience the future of referrals!
              </p>
            </div>

            <div className="mt-10 flex items-center gap-2">
              <Input
                className="max-w-sm font-secondary text-lg"
                placeholder="Your email address"
              />
              <Button className="bg-purple-700 text-white font-primary text-lg py-3 hover:bg-purple-600">
                Notify Me
              </Button>
            </div>
          </div>

          <div className="col-span-1  h-[45vh] xl:h-[65vh] w-full">
            <DotLottieReact
              src={"/images/referral.lottie"}
              loop
              autoplay
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
