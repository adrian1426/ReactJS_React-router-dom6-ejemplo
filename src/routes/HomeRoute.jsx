import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const HomeRoute = () => {
  return (
    <div>
      <Menu />
      <h2>
        home
      </h2>

      <hr />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeRoute;