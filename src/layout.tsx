import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-layout">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}