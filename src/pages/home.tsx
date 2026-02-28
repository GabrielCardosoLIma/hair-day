import { Logo } from "../features/logo";
import { SideBar } from "../features/sidebar";

export function PageHome() {
  return (
    <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
      <Logo className="absolute top-0 left-0" />
      <SideBar />
    </main>
  );
}
