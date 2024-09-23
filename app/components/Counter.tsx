"use client";
import React from "react";
import { useEffect, useState } from "react";

export function Counter({ label }: { label?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="text-[0.95rem]">
      {label ? (
        <>
          <span className="dark:bg-gray-800 py-1 px-1.5 rounded-md bg-gray-200 font-semibold text-sm">
            {label}
          </span>{" "}
        </>
      ) : null}
      Count: {count}
    </p>
  );
}
