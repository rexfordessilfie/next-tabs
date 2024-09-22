import { Counter } from "@/app/components/Counter";

export default function TabB() {
  console.log("@@ Render: TabB");
  return (
    <div className="bg-red-500">
      Tab B
      <Counter />
    </div>
  );
}
