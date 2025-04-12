import DummyImages from "@/components/auth/dummy-images";
import { Button } from "@/components/ui/button";
import { Bot, Linkedin } from "lucide-react";
import Link from "next/link";

const SignInScreen = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 h-screen">
      {/* IMAGES */}
      <div className="col-span-2">
        <DummyImages
          stats={[
            {
              color: "bg-[#E65B3D]",
              number: "88%",
              description:
                "of employers say referrals are the #1 source of quality hires",
            },
            {
              color: "bg-[#29B575]",
              number: "55%",
              description: "faster hiring time via referrals vs job sites",
            },
          ]}
        />
      </div>

      {/* LOGIN */}
      <div className="col-span-1 h-full px-6">
        <div className="flex flex-col gap-6 justify-center h-full">
          {/* Heading */}
          <div>
            <h1 className="font-primary text-4xl font-bold text-black">
              Sign in to continue
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Whether you&apos;re seeking your next opportunity or helping
              others land theirs — join the network that values genuine
              referrals ✨
            </p>
          </div>

          {/* Sign In Button */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <Link href="/join-as">
              <Button className="flex items-center gap-3 bg-[#0077B5] hover:bg-[#006097] text-white px-5 py-3 text-base font-primary font-semibold transition-all w-full justify-center shadow-sm hover:shadow-md rounded-lg">
                <Linkedin className="!h-5 !w-5" />
                Sign in with LinkedIn
              </Button>
            </Link>{" "}
            <Link href="/join-as">
              <Button className="flex items-center gap-3 bg-white hover:bg-white/90 text-black border border-greyBorder  px-5 py-3 text-base font-primary font-semibold transition-all w-full justify-center shadow-sm hover:shadow-md  rounded-lg">
                <Bot className="!h-6 !w-6" />
                Continue as guest
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInScreen;
