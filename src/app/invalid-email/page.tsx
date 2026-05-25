"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

import { CirclePlay } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GoogleSignInButton } from "@/components/GoogleSignInButton";

const InvalidEmail = () => {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-[url('/signInBg.jpg')]  bg-cover
    bg-center flex justify-center items-center "
    >
      <Card className="w-3/4 sm:w-full max-w-2xl bg-muted py-10 text-center dark:border-zinc-600">
        <CardHeader className="px-8">
          <CardTitle className="mb-2 font-medium text-4xl tracking-tight ">
            <h1 className="font-bold  text-[#f5a623]">
              Invalid<span style={{ color: "#e8e2d8 " }}> Email</span>
            </h1>
          </CardTitle>
          <CardDescription className="mx-auto max-w-lg text-lg text-white ">
            Check the below about what could be wrong.
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-left">
              <li>
                Your email maybe incorrect. Use a valid bracu gmail account.
              </li>
              <li>
                You may not be enrolled in this course. Kindly validate
                properly.
              </li>
            </ol>
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-auto mt-4 px-8">
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer"
            onClick={() => signOut({ callbackUrl: "/sign-in" })}
          >
            Go to Sign-In Page <CirclePlay />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvalidEmail;
