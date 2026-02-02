import "../styles/Navbar.css";

const Navbar = ({ setPage, currentPage }) => {
  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="navbar">
      <h2 className="logo"></h2>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li
            key={item}
            className={currentPage === item ? "active" : ""}
            onClick={() => setPage(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
