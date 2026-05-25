// components/google-signin-button.tsx
"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GoogleSignInButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      size="lg"
      type="submit"
      disabled={pending}
      className={cn(
        "cursor-pointer",
        "bg-zinc-100 text-zinc-900",
        "hover:bg-zinc-200",
        "dark:bg-zinc-800 dark:text-zinc-100",
        "dark:hover:bg-zinc-700",
        "border border-zinc-300 dark:border-zinc-600",
        "text-lg",
      )}
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Signing In...
        </>
      ) : (
        <>
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
        </>
      )}
    </Button>
  );
}
