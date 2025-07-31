import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currenUser = await getCurrentUser();

  if (!currenUser) return redirect("/sign-in");

  return (
    <main className="flex h-screen">
      <Sidebar {...currenUser} />

      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currenUser} />

        <Header userId={currenUser.$id} accountId={currenUser.accountId} />

        <div className="main-content">{children}</div>
      </section>

      <Toaster />
    </main>
  );
};
export default Layout;
