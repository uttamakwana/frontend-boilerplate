// routes, route
import { Route, Routes } from "react-router-dom";
// pages
import { Home, NotFound } from "./pages";

// component
export default function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path={"/"} element={<Home />} />
      {/* Not Found Route */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
