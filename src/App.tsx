import { BrowserRouter, Route, Routes } from "react-router";
import { PageHome } from "./pages/home";
import { PageComponents } from "./pages/components";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageHome />} />
        <Route path="/componentes" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  );
}
