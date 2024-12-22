import React from "react";
import Navbar from "./Navbar";
import PremiumModal from "@/components/premium/PremiumModal";
import SubscriptionLevelProvider from "./SubscriptionLevelProvider";
import { auth } from "@clerk/nextjs/server";
import { getUserSubscriptionLevel } from "@/lib/subscription";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const userSubscriptionLevel = await getUserSubscriptionLevel(userId);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <SubscriptionLevelProvider userSubscriptionLevel={userSubscriptionLevel}>
        {children}
      </SubscriptionLevelProvider>
      <PremiumModal />
    </div>
  );
};

export default layout;
