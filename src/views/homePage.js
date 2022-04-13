import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="navigation">
      <div>
        <NavLink to="./todo">To do</NavLink>
      </div>
      <div>
        <NavLink to="./photos">Photos</NavLink>
      </div>
    </div>
  );
}

export default Home;
