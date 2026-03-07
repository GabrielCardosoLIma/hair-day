import { Text } from "../components/text";
import { ButtonIcon } from "../components/button-icon";

import Trash from "../assets/icons/trash.svg?react";
import { useAppointment } from "../hooks/use-appoitment";

interface PeriodItemProps {
  id: string;
  customerName: string;
  time: string;
}

export function PeriodItem({ id, customerName, time }: PeriodItemProps) {
  const { deleteAppointment } = useAppointment();

  function handleDeleteAppointment() {
    deleteAppointment({ id });
  }

  return (
    <div className="flex items-center py-2 gap-5">
      <Text variant="titleMd" className="text-gray-200">
        {time}
      </Text>

      <Text variant="textMd" className="text-gray-200 flex-1">
        {customerName}
      </Text>

      <ButtonIcon icon={Trash} onClick={handleDeleteAppointment} />
    </div>
  );
}
