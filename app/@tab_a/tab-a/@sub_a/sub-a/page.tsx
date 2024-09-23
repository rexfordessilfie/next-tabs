import { Counter } from "@/app/components/Counter";

export default function SubA() {
  return (
    <div className="border bg-purple-500 dark:bg-purple-600 p-2 rounded-md flex flex-col gap-2 dark:border-gray-500">
      <h1 className="font-semibold">Sub A</h1>
      <Counter label="Page" />
    </div>
  );
}
