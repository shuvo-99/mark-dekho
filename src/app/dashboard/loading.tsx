import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-2xl bg-[#0d1b2a]/5 ${className}`} />
  );
}

export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Navbar />
      <section className="relative overflow-hidden pt-20">
        <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-10">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <SkeletonBlock className="xl:col-span-2 h-40" />
            <SkeletonBlock className="h-40" />
          </div>

          {/* NAVIGATION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonBlock key={i} className="h-20" />
            ))}
          </div>

          {/* CONTENT SECTIONS */}
          <div className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonBlock key={i} className="h-32" />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
