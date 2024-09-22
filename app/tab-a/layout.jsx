import { Counter } from "@/app/components/Counter";
import { NavLink } from "@/app/components/NavLink";
import { Route } from "@/app/components/Route";

export default function Layout({ children, sub_a }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-fit gap-4 text-center flex py-2 mx-auto">
        <NavLink href="/tab-a" exact>
          Tab A Home
        </NavLink>
        <NavLink href="/tab-a/sub-a">Sub A</NavLink>
      </div>

      <div className="border rounded-md p-2 flex flex-col gap-2 dark:border-gray-500">
        <Counter label="Layout" />

        {children}
      </div>
    </div>
  );
}
