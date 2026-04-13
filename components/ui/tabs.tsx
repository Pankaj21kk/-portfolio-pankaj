"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  const setActiveTab = (idx: number) => {
    setActive(propTabs[idx]);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start perspective-[1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              setActiveTab(idx);
            }}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-foreground">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        active={active}
        key={active.value}
        className={cn("mt-8", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  active,
}: {
  className?: string;
  key?: string;
  active: Tab;
}) => {
  return (
    <div className="relative w-full">
      <motion.div
        key={active.value}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className={cn("w-full", className)}
      >
        {active.content}
      </motion.div>
    </div>
  );
};
