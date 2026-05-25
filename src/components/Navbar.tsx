import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

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
          Mark<span style={{ color: "#e8e2d8 " }}>Dekho</span>
        </h1>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/sign-in" });
          }}
        >
          <Button
            type="submit"
            className="p-2 rounded-lg border border-[#ffc85c] cursor-pointer"
          >
            {/* <h1 className="text-md font-bold  text-white">
              Sign<span style={{ color: "#e8e2d8 " }}> Out</span>
              
            </h1> */}
            <LogOut size={20} color="#FFF" />
          </Button>
        </form>
        {/* </motion.span> */}
      </div>
    </nav>
  );
}
