import { auth, signIn, signOut } from "@/auth";
import SignOut from "../sign-out/page";
import CardBanner from "@/components/signInCard";

import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function SignIn() {
  const session = await auth();
  const user = session?.user;

  return user ? (
    <SignOut user={user} />
  ) : (
    <div
      className="min-h-screen bg-[url('/signInBg.jpg')]  bg-cover
    bg-center flex justify-center items-center "
    >
      <Card className="w-3/4 sm:w-full max-w-2xl bg-muted py-10 text-center dark:border-zinc-600">
        <CardHeader className="px-8">
          <CardTitle className="mb-2 font-medium text-4xl tracking-tight text-white">
            Mark Dekho
          </CardTitle>
          <CardDescription className="mx-auto max-w-lg text-lg text-white ">
            Welcome students. Find your course marks by signing with your bracu
            email account.
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-auto mt-4 px-8">
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
          >
            <Button
              size="lg"
              type="submit"
              className="cursor-pointer bg-zinc-100 text-zinc-900
    hover:bg-zinc-200
    dark:bg-zinc-800 dark:text-zinc-100
    dark:hover:bg-zinc-700
    border border-zinc-300 dark:border-zinc-600
    text-lg
    "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 488 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              Sign In
            </Button>
          </form>
          {/* <Button size="lg">
            Sign up for free <ArrowUpRight />{" "}
          </Button>
          <Button size="lg" variant="outline">
            Get a demo <CirclePlay />
          </Button> */}
        </CardContent>
      </Card>
    </div>
  );
}
