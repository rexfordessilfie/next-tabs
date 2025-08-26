import { Counter, NavLink, Route } from "@/app/components";

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
        {/* <Counter2 label="Layout" id="tab-a-layout" /> */}

        <Route path="/tab-a" exact component={children} />
        <Route path="/tab-a/sub-a" component={sub_a} />
      </div>
    </div>
  );
}
