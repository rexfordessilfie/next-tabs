import { NavLink } from "@/app/components/NavLink";
import { Route } from "@/app/components/Route";

export default function Layout({ children, sub_a }) {
  return (
    <>
      <div className="w-fit gap-4 text-center flex mx-auto py-2">
        <NavLink href="/tab-a" exact>
          Tab A Home
        </NavLink>
        <NavLink href="/tab-a/sub-a">Sub A</NavLink>
      </div>

      <Route path="/tab-a" exact component={children} />
      <Route path="/tab-a/sub-a" component={sub_a} />
    </>
  );
}
