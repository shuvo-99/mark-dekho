"use client";

import { useEffect } from "react";
import { CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen bg-[url('/signInBg.jpg')] bg-cover
    bg-center flex justify-center items-center "
    >
      <Card className="w-3/4 sm:w-full max-w-2xl bg-muted py-10 text-center shadow-none">
        <CardHeader className="px-8">
          <CardTitle className="mb-2 font-medium text-4xl tracking-tight text-white">
            Couldn&apos;t Load Your Marks
          </CardTitle>
          <CardDescription className="mx-auto max-w-lg text-lg text-muted-foreground text-white">
            Something went wrong while fetching your data. This is usually
            temporary, please try again.
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-auto mt-4 px-8">
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer"
            onClick={() => reset()}
          >
            Try Again <CirclePlay />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
