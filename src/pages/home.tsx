import { Logo } from "../features/appointments/logo";
import { Schedule } from "../features/appointments/schedule";
import { SideBar } from "../features/appointments/sidebar";

export function PageHome() {
  return (
    <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
      <Logo className="absolute top-0 left-0" />
      <SideBar />
      <Schedule />
    </main>
  );
}
