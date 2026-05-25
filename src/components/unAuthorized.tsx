"use client";
import { CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const UnAuthorized = () => {
  const router = useRouter();
  return (
    <div
      className="min-h-screen bg-[url('/signInBg.jpg')]  bg-cover
    bg-center flex justify-center items-center "
    >
      <Card className="w-3/4 sm:w-full max-w-2xl bg-muted py-10 text-center shadow-none">
        <CardHeader className="px-8">
          <CardTitle className="mb-2 font-medium text-4xl tracking-tight text-white">
            401 Unauthorized
          </CardTitle>
          <CardDescription className="mx-auto max-w-lg text-lg text-muted-foreground text-white">
            Need to Sign In to see the marks
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-auto mt-4 px-8">
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer"
            onClick={() => {
              router.push("/sign-in");
            }}
          >
            Go to Sign In Page <CirclePlay />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnAuthorized;
