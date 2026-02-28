import { ScheduleHeader } from "./schedule-header";
import { PeriodList } from "./period-list";
import { PeriodItem } from "./period-item";
import { Text } from "../components/text";

const appointmentsMorning = [
  { id: 1, time: "11:00", name: "Gabriel Cardoso" },
  { id: 2, time: "12:00", name: "Gabriel Lima" },
];
const appointmentsAfternoon = [
  { id: 1, time: "13:00", name: "Gabriel Cardoso" },
  { id: 2, time: "14:00", name: "Gabriel Lima" },
];
const appointmentsNight = [
  { id: 1, time: "19:00", name: "Gabriel Cardoso" },
  { id: 2, time: "21:00", name: "Gabriel Lima" },
];

export function Schedule() {
  return (
    <div className="w-full py-20">
      <div className="mx-auto max-w-170.5 space-y-8">
        <ScheduleHeader />

        <div className="space-y-3">
          <PeriodList period="morning">
            {appointmentsMorning.length > 0 ? (
              appointmentsMorning.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={Math.random().toString(36).substring(2, 9)}
                  customerName={appointment.name}
                  time={appointment.time}
                />
              ))
            ) : (
              <Text variant="textSm" className="text-gray-300">
                Nenhum agendamento para este período.
              </Text>
            )}
          </PeriodList>

          <PeriodList period="afternoon">
            {appointmentsAfternoon.length > 0 ? (
              appointmentsAfternoon.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={Math.random().toString(36).substring(2, 9)}
                  customerName={appointment.name}
                  time={appointment.time}
                />
              ))
            ) : (
              <Text variant="textSm" className="text-gray-300">
                Nenhum agendamento para este período.
              </Text>
            )}
          </PeriodList>

          <PeriodList period="night">
            {appointmentsNight.length > 0 ? (
              appointmentsNight.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={Math.random().toString(36).substring(2, 9)}
                  customerName={appointment.name}
                  time={appointment.time}
                />
              ))
            ) : (
              <Text variant="textSm" className="text-gray-300">
                Nenhum agendamento para este período.
              </Text>
            )}
          </PeriodList>
        </div>
      </div>
    </div>
  );
}
