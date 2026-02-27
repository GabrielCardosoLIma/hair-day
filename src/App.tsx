import { Button } from "./components/button";
import { Text } from "./components/text";
import { TextInput } from "./components/text-input";

import UserSquare from "./assets/icons/user-square.svg?react";

export function App() {
  return (
    <div className="flex flex-col p-4 text-gray-100 space-y-4 max-w-80">
      <div className="flex flex-col gap-2">
        <Text variant="titleLg">Olá mundo!</Text>
        <Text variant="titleMd">Olá mundo!</Text>
        <Text variant="titleSm">Olá mundo!</Text>
        <Text variant="textMd">Olá mundo!</Text>
        <Text variant="textSm">Olá mundo!</Text>
      </div>

      <div className="flex flex-col gap-2">
        <Button>Agendar</Button>
        <Button disabled>Agendar</Button>
      </div>

      <div className="flex flex-col gap-2">
        <TextInput icon={UserSquare} placeholder="Nome do cliente" />
      </div>
    </div>
  );
}
