import { Icon } from "../components/icon";
import { Text } from "../components/text";

import SunHorizon from "../assets/icons/sun-horizon.svg?react";
import CloudSun from "../assets/icons/cloud-sun.svg?react";
import MoonStars from "../assets/icons/moon-stars.svg?react";
import type { ReactNode } from "react";

const periods = {
  morning: {
    title: "Manhã",
    icon: SunHorizon,
    time: "9h-12h",
  },
  afternoon: {
    title: "Tarde",
    icon: CloudSun,
    time: "13h-18h",
  },
  night: {
    title: "Noite",
    icon: MoonStars,
    time: "19h-21h",
  },
} as const;

interface PeriodListProps {
  children: ReactNode;
  period: keyof typeof periods;
}

export function PeriodList({ period, children }: PeriodListProps) {
  return (
    <div className="flex flex-col border border-gray-600 rounded-lg">
      <div className="w-full flex items-center justify-center px-5 py-3 gap-3 border-b border-gray-600">
        <Icon svg={periods[period].icon} className="fill-yellow size-5" />

        <Text variant="textSm" className="text-gray-300 flex-1">
          {periods[period].title}
        </Text>

        <Text variant="textSm" className="text-gray-400">
          {periods[period].time}
        </Text>
      </div>

      <div className="flex flex-col gap-0.5 p-5">{children}</div>
    </div>
  );
}
