import { Counter } from "@/app/components/Counter";

export default function TabA() {
  console.log("@@ Render: TabA");
  return (
    <div className="bg-blue-500">
      Tab A
      <Counter />
    </div>
  );
}
