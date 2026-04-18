"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function ConstructionToast() {
  useEffect(() => {
    const id = toast("Construction Zone", {
      description: "This is a work in progress, building in public.",
      duration: Infinity,
      position: "bottom-right",
    });

    return () => {
      toast.dismiss(id);
    };
  }, []);

  return null;
}
