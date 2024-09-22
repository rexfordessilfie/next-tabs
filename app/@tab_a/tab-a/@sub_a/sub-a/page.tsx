import { Counter } from "@/app/components/Counter";

export default function SubA() {
  console.log("@@ Render: TabA/SubA");
  return (
    <div className="bg-purple-500">
      Sub A
      <Counter />
    </div>
  );
}
