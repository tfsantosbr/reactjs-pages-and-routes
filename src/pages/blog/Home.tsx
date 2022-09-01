import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Blog Home Page</h1>
      <NavLink to="/control-panel">Go To Control Panel</NavLink>
    </>
  );
}
