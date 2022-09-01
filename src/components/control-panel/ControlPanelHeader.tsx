import { NavLink } from "react-router-dom";

export function ControlPanelHeader() {
  return (
    <>
      <h1>Control Panel Header (<NavLink to="/">Go To Blog</NavLink>)</h1>
      <nav>
        <NavLink to="/control-panel">Dashboard</NavLink> | 
        <NavLink to="/control-panel/companies">Companies</NavLink> | 
        <NavLink to="/control-panel/users">Users</NavLink>
      </nav>
    </>
  );
}
