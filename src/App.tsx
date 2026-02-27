import { Button } from "./components/button";
import { Text } from "./components/text";

export function App() {
  return (
    <div className="flex flex-col p-4 text-gray-100 space-y-4">
      <div className="flex flex-col gap-2">
        <Text variant="titleLg">Olá mundo!</Text>
        <Text variant="titleMd">Olá mundo!</Text>
        <Text variant="titleSm">Olá mundo!</Text>
        <Text variant="textMd">Olá mundo!</Text>
        <Text variant="textSm">Olá mundo!</Text>
      </div>

      <div className="flex flex-col gap-2">
        <Button className="w-80">Agendar</Button>
        <Button className="w-80" disabled>
          Agendar
        </Button>
      </div>
    </div>
  );
}
