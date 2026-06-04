"use client";

import { Button } from "@/components/ui/button";
import { useLeadModal } from "./LeadModalProvider";

/**
 * "Enroll Now" style button that opens the global lead-capture modal,
 * pre-filling the course name. Drop-in replacement for the old
 * <Link href="/learn/..."><Button>Enroll Now</Button></Link>.
 *
 * Props: courseName?, children, ...buttonProps (className, size, etc.)
 */
export function EnrollButton({ courseName = "", children, ...props }) {
  const { openLeadModal } = useLeadModal();

  return (
    <Button type="button" onClick={() => openLeadModal(courseName)} {...props}>
      {children}
    </Button>
  );
}
