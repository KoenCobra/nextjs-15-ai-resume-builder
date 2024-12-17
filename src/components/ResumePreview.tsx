import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import React, { useRef } from "react";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}
const ResumePreview = ({ resumeData, className }: ResumePreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);
  return (
    <div
      ref={containerRef}
      className={cn("aspect-[210/297] h-fit w-full bg-white", className)}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{ zoom: (1 / 794) * width }}
      ></div>
    </div>
  );
};

export default ResumePreview;
