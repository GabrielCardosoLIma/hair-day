import { useState, type ChangeEvent } from "react";
import useAppointments from "../hooks/use-appointments";
import dayjs from "dayjs";

import { ScheduleHeader } from "./schedule-header";
import { PeriodList } from "./period-list";
import { PeriodItem } from "./period-item";
import { Text } from "../components/text";

export function Schedule() {
  const [filteredDate, setFilteredDate] = useState<Date>(
    dayjs().startOf("day").toDate()
  );

  const { morningAppointments, afternoonAppointments, nightAppointments } =
    useAppointments({
      filters: {
        date: filteredDate,
      },
    });

  function handleFilteredDateChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) return;

    const date = dayjs(event.target.value).startOf("day").toDate();
    setFilteredDate(date);
  }

  return (
    <div className="w-full py-20">
      <div className="mx-auto max-w-170.5 space-y-8">
        <ScheduleHeader
          filteredDate={filteredDate}
          onChangeFilteredDate={handleFilteredDateChange}
        />

        <div className="space-y-3">
          <PeriodList period="morning">
            {morningAppointments.length > 0 ? (
              morningAppointments.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={Math.random().toString(36).substring(2, 9)}
                  customerName={appointment.customerName}
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
            {afternoonAppointments.length > 0 ? (
              afternoonAppointments.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={Math.random().toString(36).substring(2, 9)}
                  customerName={appointment.customerName}
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
            {nightAppointments.length > 0 ? (
              nightAppointments.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={Math.random().toString(36).substring(2, 9)}
                  customerName={appointment.customerName}
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
