import { Link, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import { items } from '../data/items';

const HomeRoute = () => {
  return (
    <div>
      <Menu />
      <h2>
        home
      </h2>

      <hr />

      <div>
        <div>
          {
            items.map((item) => (
              <div key={item.id}>
                <Link to={`/contacts/${item.id}`}>{item.name}</Link>
              </div>
            ))
          }
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeRoute;