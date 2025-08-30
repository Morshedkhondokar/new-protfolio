import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-8">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Morshed.dev
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
