import { Text } from "../components/text";
import { DatePicker } from "../components/date-picker";

export function ScheduleHeader() {
  return (
    <header className="flex justify-between">
      <div className="flex flex-col gap-1">
        <Text as="h2" variant="titleLg" className="text-gray-100">
          Sua agenda
        </Text>

        <Text variant="textSm" className="text-gray-300">
          Consulte os seus cortes de cabelo agendados por dia
        </Text>
      </div>

      <DatePicker />
    </header>
  );
}
