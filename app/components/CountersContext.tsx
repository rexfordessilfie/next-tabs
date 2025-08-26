"use client";
import React, { useCallback } from "react";

type CountersContextType = {
  counters: Record<string, number>;
  start: (id: string) => void;
  stop: (id: string) => void;
  getValue: (id: string) => number;
};

const CountersContext = React.createContext<CountersContextType>({
  counters: {},
  start: () => {},
  stop: () => {},
  getValue: () => 0,
});

export const CountersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [counters, setCounters] = React.useState<CountersContextType>({
    counters: {},
    start: () => {},
    stop: () => {},
    getValue: () => 0,
  });

  const intervalIdRefs = React.useRef<
    Record<string, NodeJS.Timeout | undefined>
  >({});

  const start = useCallback(
    (id: string) => {
      if (intervalIdRefs.current[id]) return;

      setCounters((prev) => ({
        ...prev,
        counters: { ...prev.counters, [id]: 0 },
      }));

      const interval = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          counters: { ...prev.counters, [id]: prev.counters[id] + 1 },
        }));
      }, 1000);

      intervalIdRefs.current[id] = interval;
    },
    [counters]
  );

  const stop = useCallback((id: string) => {
    clearInterval(intervalIdRefs.current[id]!);
    intervalIdRefs.current[id] = undefined;
  }, []);

  const getValue = useCallback(
    (id: string) => {
      return counters.counters[id];
    },
    [counters]
  );

  return (
    <CountersContext.Provider
      value={{ counters: counters.counters, start, stop, getValue }}
    >
      {children}
    </CountersContext.Provider>
  );
};

export const useCounters = () => React.useContext(CountersContext);

export const useCounter = (id: string) => {
  const { getValue, start: startCounter, stop: stopCounter } = useCounters();

  React.useEffect(() => {
    startCounter(id);
  }, [id]);

  const start = useCallback(() => startCounter(id), [id]);
  const stop = useCallback(() => stopCounter(id), [id]);

  const value = getValue(id);

  return {
    value,
    start,
    stop,
  };
};

export function Counter2({ label, id }: { label?: string; id: string }) {
  const { value } = useCounter(id);

  return (
    <p className="text-[0.95rem]">
      {label ? (
        <>
          <span className="dark:bg-gray-800 py-1 px-1.5 rounded-md bg-gray-200 font-semibold text-sm">
            {label}
          </span>{" "}
        </>
      ) : null}
      Count: {value}
    </p>
  );
}
