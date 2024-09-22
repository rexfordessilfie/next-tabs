"use client";
import Link from "next/link";
import { useIsActivePath } from "../hooks/useIsActivePath";

type Props = React.ComponentProps<typeof Link> & {
  exact?: boolean;
};

export function NavLink({ exact, ...props }: Props) {
  const isActivePath = useIsActivePath();

  const isActive = isActivePath(props.href as string, exact);

  return (
    <Link
      {...props}
      style={{
        ...(isActive ? { fontWeight: "bold" } : {}),
        ...props.style,
      }}
    />
  );
}
