import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSelect } from "../components/time-select";

import UserSquare from "../assets/icons/user-square.svg?react";
import { Button } from "../components/button";

export function SideBar() {
  return (
    <aside className="p-20 flex flex-col bg-gray-700 max-w-124.5 w-full gap-6">
      <div className="w-full space-y-1">
        <Text as="h2" variant="titleLg" className="text-gray-100">
          Agende um atendimento
        </Text>

        <Text variant="textSm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <form className="space-y-8">
        <label className="flex flex-col gap-2 w-full">
          <Text variant="titleMd" className="text-gray-200">
            Data
          </Text>

          <DatePicker />
        </label>

        <label className="flex flex-col gap-2 w-full space-y-2">
          <Text variant="titleMd" className="text-gray-200">
            Horários
          </Text>

          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Text variant="textSm" className="text-gray-300">
                Manhã
              </Text>

              <div className="flex flex-wrap gap-2">
                <TimeSelect>09:00</TimeSelect>
                <TimeSelect>10:00</TimeSelect>
                <TimeSelect>11:00</TimeSelect>
                <TimeSelect>12:00</TimeSelect>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Text variant="textSm" className="text-gray-300">
                Tarde
              </Text>

              <div className="flex flex-wrap gap-2">
                <TimeSelect>13:00</TimeSelect>
                <TimeSelect>14:00</TimeSelect>
                <TimeSelect>15:00</TimeSelect>
                <TimeSelect>16:00</TimeSelect>
                <TimeSelect>17:00</TimeSelect>
                <TimeSelect>18:00</TimeSelect>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Text variant="textSm" className="text-gray-300">
                Noite
              </Text>

              <div className="flex flex-wrap gap-2">
                <TimeSelect>19:00</TimeSelect>
                <TimeSelect>20:00</TimeSelect>
                <TimeSelect>21:00</TimeSelect>
              </div>
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-2 w-full">
          <Text variant="titleMd" className="text-gray-200">
            Cliente
          </Text>

          <TextInput icon={UserSquare} placeholder="Helena Souza" />
        </label>

        <Button type="submit">Agendar</Button>
      </form>
    </aside>
  );
}
