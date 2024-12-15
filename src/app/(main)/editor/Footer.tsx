import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";
import { steps } from "./steps";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

const Footer = ({ currentStep, setCurrentStep }: FooterProps) => {
  const currentIndex = steps.findIndex((step) => step.key === currentStep);

  const previousStep =
    currentIndex > 0 ? steps[currentIndex - 1].key : undefined;
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1].key : undefined;

  return (
    <footer className="w-full border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            onClick={
              previousStep ? () => setCurrentStep(previousStep) : undefined
            }
            variant="secondary"
            disabled={!previousStep}
          >
            Previous step
          </Button>
          <Button
            onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
            disabled={!nextStep}
          >
            Next step
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/resumes">
            <Button variant="secondary">Close</Button>
          </Link>
          <p className="text-muted-foreground opacity-0">Saving...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
