
import { Link } from "react-router";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to='/' className="link link-hover">Home</Link>
        <Link to={'/about'} className="link link-hover">About</Link>
        <Link to={'/projects'} className="link link-hover">Projects</Link>
        <Link to={'/contact'} className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <SocialIcons />
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Morshed.dev
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
