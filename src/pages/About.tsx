import { Outlet } from "react-router-dom";

function About() {
  return (
    <div className="flex justify-content-between">
      <div>About Us</div>
      <Outlet />
    </div>
  );
}

export default About;
