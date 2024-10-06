import { Counter } from "@/app/components/Counter";

export default function TabC() {
  return (
    <div className="border bg-green-500 dark:bg-green-600 p-2 rounded-md flex flex-col gap-2 dark:border-gray-500">
      <h1 className="font-semibold">Tab C (no slot)</h1>
      <Counter label="Page" />
    </div>
  );
}
