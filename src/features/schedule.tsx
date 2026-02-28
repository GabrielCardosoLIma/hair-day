import { DatePicker } from "../components/date-picker";
import { Icon } from "../components/icon";
import { Text } from "../components/text";

import SunHorizon from "../assets/icons/sun-horizon.svg?react";
import CloudSun from "../assets/icons/cloud-sun.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import MoonStars from "../assets/icons/moon-stars.svg?react";
import { ButtonIcon } from "../components/button-icon";

export function Schedule() {
  return (
    <div className="w-full py-20">
      <div className="mx-auto max-w-170.5 space-y-8">
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

        <div className="space-y-3">
          <div className="flex flex-col border border-gray-600 rounded-lg">
            <div className="w-full flex items-center justify-center px-5 py-3 gap-3 border-b border-gray-600">
              <Icon svg={SunHorizon} className="fill-yellow size-5" />

              <Text variant="textSm" className="text-gray-300 flex-1">
                Manhã
              </Text>

              <Text variant="textSm" className="text-gray-400">
                09h-12h
              </Text>
            </div>

            <div className="flex items-center p-5 gap-5">
              <Text variant="titleMd" className="text-gray-200">
                11:00
              </Text>

              <Text variant="textMd" className="text-gray-200 flex-1">
                Ryan Dorwart
              </Text>

              <ButtonIcon icon={Trash} />
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-gray-600 rounded-lg">
          <div className="w-full flex items-center justify-center px-5 py-3 gap-3 border-b border-gray-600">
            <Icon svg={CloudSun} className="fill-yellow size-5" />

            <Text variant="textSm" className="text-gray-300 flex-1">
              Tarde
            </Text>

            <Text variant="textSm" className="text-gray-400">
              13h-18h
            </Text>
          </div>

          <div className="flex flex-col gap-0.5 p-5">
            <div className="flex items-center py-2 gap-5">
              <Text variant="titleMd" className="text-gray-200">
                13:00
              </Text>

              <Text variant="textMd" className="text-gray-200 flex-1">
                Livia Curtis
              </Text>

              <ButtonIcon icon={Trash} />
            </div>

            <div className="flex items-center py-2 gap-5">
              <Text variant="titleMd" className="text-gray-200">
                14:00
              </Text>

              <Text variant="textMd" className="text-gray-200 flex-1">
                Randy Calzoni
              </Text>

              <ButtonIcon icon={Trash} />
            </div>

            <div className="flex items-center py-2 gap-5">
              <Text variant="titleMd" className="text-gray-200">
                16:00
              </Text>

              <Text variant="textMd" className="text-gray-200 flex-1">
                Marley Franci
              </Text>

              <ButtonIcon icon={Trash} />
            </div>

            <div className="flex items-center py-2 gap-5">
              <Text variant="titleMd" className="text-gray-200">
                17:00
              </Text>

              <Text variant="textMd" className="text-gray-200 flex-1">
                Jaylon Korsgaard
              </Text>

              <ButtonIcon icon={Trash} />
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-gray-600 rounded-lg">
          <div className="w-full flex items-center justify-center px-5 py-3 gap-3 border-b border-gray-600">
            <Icon svg={MoonStars} className="fill-yellow size-5" />

            <Text variant="textSm" className="text-gray-300 flex-1">
              Noite
            </Text>

            <Text variant="textSm" className="text-gray-400">
              19h-21h
            </Text>
          </div>

          <div className="flex flex-col gap-0.5 p-5">
            <div className="flex items-center py-2 gap-5">
              <Text variant="titleMd" className="text-gray-200">
                21:00
              </Text>

              <Text variant="textMd" className="text-gray-200 flex-1">
                Maria Herwitz
              </Text>

              <ButtonIcon icon={Trash} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
