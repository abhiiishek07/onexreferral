"use client";

import WaitlistForm from "@/components/forms/waitlist-from";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HomeScreen = () => {
  return (
    <section className="py-10 lg:py-10 ">
      <div className="container ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-10 items-center">
          <div className="col-span-1">
            {["Get Referral.", "Share Referral.", "All in one place."].map(
              (text, i) => (
                <motion.h1
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="font-primary text-4xl md:text-5xl xl:text-7xl font-bold leading-tight text-black dark:text-white"
                >
                  {text}
                </motion.h1>
              )
            )}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="mt-5 p-6 rounded-2xl backdrop-blur-sm border border-purple-300/30 bg-white/60 dark:bg-white/5 dark:border-purple-500/20 shadow-sm"
            >
              <p className="text-lg md:text-xl font-primary font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide">
                🚀 Coming Soon
              </p>
              <p className="text-md md:text-lg text-gray-800 dark:text-gray-200 mt-4 font-secondary">
                <span className="font-semibold text-black dark:text-white font-primary">
                  OneXReferral
                </span>{" "}
                is your go-to platform for getting and sharing job referrals
                effortlessly. Whether you&apos;re looking to land your dream job
                or help others get hired, we make the referral process seamless
                and efficient. Join the waitlist and be the first to experience
                the future of referrals!
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="mt-6"
            >
              <WaitlistForm />
            </motion.div>
          </div>{" "}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="h-[45vh] xl:h-[65vh] w-full"
            >
              <DotLottieReact
                src={"/images/referral.lottie"}
                loop
                autoplay
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
