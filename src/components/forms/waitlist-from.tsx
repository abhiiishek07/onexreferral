"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

const WaitlistForm = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/v1/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setEmail("");
        toast.success(
          "Congratulations! We have added you in the waitlist and will notify you as soon as we launch the MVP 💖"
        );
      } else {
        toast.error("Oops! Something went wrong");
      }
    } catch (err) {
      toast.error("Oops! Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  items-start sm:items-center gap-2 max-w-xl"
    >
      <Input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="font-primary placeholder:font-primary text-sm lg:text-lg"
        placeholder="Your email address"
        required
      />
      <Button
        className="bg-purple-700 text-white font-primary text-sm lg:text-lg py-3 px-6 hover:bg-purple-600"
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Notify Me"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
