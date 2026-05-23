import { auth, signIn, signOut } from "@/auth";
import SignOut from "../sign-out/page";

export default async function SignIn() {
  const session = await auth();
  const user = session?.user;

  return user ? (
    <SignOut user={user} />
  ) : (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="p-2 border-2 bg-blue-300">
        Signin with Google
      </button>
    </form>
  );
}
