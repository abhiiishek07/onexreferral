import DummyImages from "@/components/auth/dummy-images";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const SignInScreen = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 h-screen">
      {/* IMAGES */}
      <div className="col-span-2">
        <DummyImages />
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
              Get referred to your dream job through real employees ✨
            </p>
          </div>

          {/* Benefits */}
          <ul className="text-base font-primary text-greyText font-normal space-y-2">
            <li>
              ✅ Referred candidates are 4 times more likely to be hired than
              non-referred candidates.
            </li>
            <li>🚀 Fast-track your application with employee-backed trust</li>
          </ul>

          {/* Sign In Button */}
          <Button className="flex items-center gap-3 bg-[#0077B5] hover:bg-[#006097] text-white px-5 py-3 text-lg font-semibold transition-all w-full justify-center shadow-lg rounded-lg">
            <Linkedin className="h-5 w-5" />
            Sign in with LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignInScreen;
