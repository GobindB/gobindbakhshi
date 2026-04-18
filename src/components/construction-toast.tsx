"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function ConstructionToast() {
  useEffect(() => {
    const id = toast("Construction Zone", {
      description: (<span className="text-[#7c7c7c]">This is a work in progress, building in public.</span>),
      duration: Infinity,
      position: "bottom-right",
    });

    return () => {
      toast.dismiss(id);
    };
  }, []);

  return null;
}
