import { Button } from "../components/button";
import { ButtonIcon } from "../components/button-icon";
import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSelect } from "../components/time-select";

import UserSquare from "./assets/icons/user-square.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";

export function PageComponents() {
  return (
    <div className="mx-auto max-w-126 p-4">
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="titleLg" className="text-gray-100">
            Olá mundo!
          </Text>
          <Text variant="titleMd" className="text-gray-100">
            Olá mundo!
          </Text>
          <Text variant="titleSm" className="text-gray-100">
            Olá mundo!
          </Text>
          <Text variant="textMd" className="text-gray-100">
            Olá mundo!
          </Text>
          <Text variant="textSm" className="text-gray-100">
            Olá mundo!
          </Text>
        </div>

        <div className="flex flex-col gap-2">
          <Button>Agendar</Button>
          <Button disabled>Agendar</Button>
        </div>

        <div className="flex flex-col gap-2">
          <TextInput icon={UserSquare} placeholder="Nome do cliente" />
        </div>

        <div>
          <ButtonIcon icon={TrashIcon} />
        </div>

        <div className="flex gap-2">
          <TimeSelect>10:00</TimeSelect>
          <TimeSelect selected>10:00</TimeSelect>
          <TimeSelect disabled>10:00</TimeSelect>
        </div>

        <div>
          <DatePicker className="w-full" />
        </div>
      </div>
    </div>
  );
}
