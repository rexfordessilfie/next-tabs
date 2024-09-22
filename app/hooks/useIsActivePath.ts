import { useCallback } from "react";
import { usePathname } from "next/navigation";

/**
 * Hook to check if the current path matches the given path
 */
export function useIsActivePath() {
  const pathname = usePathname();

  const isActivePath = useCallback(
    (path: string, exact?: boolean) =>
      checkMatchingPath(path, pathname, exact ? path : ""),
    [pathname]
  );

  return isActivePath;
}

/**
 * Checks if pathname matches the given path
 * @param path - path to match
 * @param pathname - current pathname
 * @param base - base path to remove from path and pathname before comparing
 * @returns boolean
 */
function checkMatchingPath(path: string, pathname: string, base = "/") {
  path = clean(path);
  pathname = clean(pathname);
  base = clean(base);

  path = path.replace(new RegExp(`^${base}`), "");
  pathname = pathname.replace(new RegExp(`^${base}`), "");

  const val =
    path === "" ? path === pathname : new RegExp(`^${path}`).test(pathname);

  return val;
}

/**
 * Cleans the path by removing leading and trailing slashes
 * @param path
 * @returns
 */
function clean(path: string) {
  return path.replace(/\/*$/, "/").replace(/^\/*/, "/");
}
