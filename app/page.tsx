import { Counter } from "./components/Counter";

export default function Home() {
  return (
    <div className="border bg-yellow-500 dark:bg-yellow-700 rounded-md p-2 dark:border-gray-500 gap-2 flex flex-col">
      <h1 className="font-semibold">Home</h1>
      <Counter label="Page" />
    </div>
  );
}
