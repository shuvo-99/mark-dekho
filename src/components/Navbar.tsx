import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "@/auth";

export default async function Navbar() {
  //
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40 bg-[#0d1b2a]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tight text-gradient"
        > */}
        <h1 className="text-2xl font-bold  text-[#f5a623]">
          Dash<span style={{ color: "#e8e2d8 " }}>board</span>
        </h1>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/sign-in" });
          }}
        >
          <button
            type="submit"
            className="p-2 rounded-xl bg-amber-400 cursor-pointer"
          >
            Sign Out
          </button>
        </form>
        {/* </motion.span> */}
      </div>
    </nav>
  );
}
