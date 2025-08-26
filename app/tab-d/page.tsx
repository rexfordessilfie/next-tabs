import { Counter2 } from "@/app/components";

export default function TabD() {
  return (
    <div className="border bg-teal-500 dark:bg-teal-600 p-2 rounded-md flex flex-col gap-2 dark:border-gray-500">
      <h1 className="font-semibold">Tab D (no slot, but context)</h1>
      <Counter2 label="Page" id="tab-d-counter-page" />
    </div>
  );
}
