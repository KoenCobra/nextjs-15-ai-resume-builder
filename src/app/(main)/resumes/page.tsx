import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Your resumes",
};

const Resumes = () => {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      <Link href="/editor" className="mx-auto flex w-fit gap-2">
        <Button>
          <PlusSquare className="size-5" />
          New Resume
        </Button>
      </Link>
    </main>
  );
};

export default Resumes;
