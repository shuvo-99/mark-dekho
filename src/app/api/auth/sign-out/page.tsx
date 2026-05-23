import { auth, signIn, signOut } from "@/auth";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type Props = {
  user: User;
};

export default async function SignOut({ user }: Props) {
  return (
    <>
      <h1 className="text-2xl">
        Welcome {user.name} email: {user.email}
      </h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="p-2 border-2 bg-amber-400">
          Sign Out
        </button>
      </form>
    </>
  );
}
