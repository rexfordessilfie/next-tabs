"use client";
import { useIsActivePath } from "../hooks/useIsActivePath";

type Route = {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
};

export function Route({ path, component, exact }: Route) {
  const isActivePath = useIsActivePath();
  const isActive = isActivePath(path, exact);

  return (
    <div key={path} style={{ display: isActive ? "block" : "none" }}>
      {component}
    </div>
  );
}
