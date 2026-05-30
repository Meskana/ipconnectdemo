import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function LandingMainLayout() {
  return (
    <div>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
