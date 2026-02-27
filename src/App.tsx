import { Text } from "./components/text";

export function App() {
  return (
    <div className="flex flex-col p-4 text-gray-100">
      <div className="flex flex-col gap-2">
        <Text variant="titleLg">Olá mundo!</Text>
        <Text variant="titleMd">Olá mundo!</Text>
        <Text variant="titleSm">Olá mundo!</Text>
        <Text variant="textMd">Olá mundo!</Text>
        <Text variant="textSm">Olá mundo!</Text>
      </div>
    </div>
  );
}
