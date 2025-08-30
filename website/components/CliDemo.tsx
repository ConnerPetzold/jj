"use client";

import { useEffect } from "react";
import { useXTerm } from "react-xtermjs";
import JJAddon from "@/lib/xterm/jj";

export default function CliDemo({ className }: { className?: string }) {
  const { instance: term, ref } = useXTerm();

  useEffect(() => {
    if (!term) return;

    const jj = new JJAddon();
    term.loadAddon(jj);

    setTimeout(() => {
      term.input("Hello\n\r");
    }, 1000);
  }, [term]);

  return <div ref={ref} className={className} />;
}
