import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import React from "react";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}
const ResumePreview = ({ resumeData, className }: ResumePreviewProps) => {
  return (
    <div className={cn("aspect-[210/297] h-fit w-full bg-white", className)}>
      <h1 className="p-6 text-3xl font-bold">Resume Preview</h1>
    </div>
  );
};

export default ResumePreview;
