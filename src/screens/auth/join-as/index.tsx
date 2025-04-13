import DummyImages from "@/components/auth/dummy-images";
import Link from "next/link";

const JoinAsScreen = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 h-screen">
      {/* IMAGES */}
      <div className="col-span-2">
        <DummyImages
          stats={[
            {
              color: "bg-[#BACB51]",
              number: "85%",
              description:
                "of jobs are filled through networking and referrals — not online applications.",
            },
            {
              color: "bg-[#EF51C9]",
              number: "50%",
              description:
                "of referred hires stay at the company longer than 3 years.",
            },
          ]}
        />
      </div>

      {/* JOIN AS OPTIONS */}
      <div className="col-span-1 h-full px-6">
        <div className="flex flex-col gap-6 justify-center h-full">
          <h1 className="font-primary text-4xl font-bold text-black">
            I want to...
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-1 gap-5">
            <Link href="/candidate/referrals">
              <div className="flex items-center gap-3 bg-primary text-white px-5 py-5 text-lg font-primary font-semibold transition-all w-full justify-center shadow-sm hover:shadow-md rounded-lg cursor-pointer">
                Get referrals (Join as candidate)
              </div>
            </Link>

            <Link href="/referrer/dashboard">
              <div className="flex items-center gap-3 bg-white hover:bg-white/90 text-black border border-greyBorder px-5 py-5 text-lg font-primary font-semibold transition-all w-full justify-center shadow-sm hover:shadow-md rounded-lg cursor-pointer">
                Share referrals (Join as referrer)
              </div>
            </Link>
          </div>

          <p className="font-secondary text-lg font-normal text-muted-foreground">
            You can always switch your role anytime from your profile settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinAsScreen;
