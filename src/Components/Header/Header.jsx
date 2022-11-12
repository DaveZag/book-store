import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      title: 'Categories',
    },
  ];

  return (
    <header className="header flex limit">
      <nav className="flex">
        <a className="logo" href="/">
          BookStore CMS
        </a>
        <ul className="nav-links flex">
          {links.map((link) => (
            <Link key={link.id} to={link.path} className="nav-link">
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="user-avatar">
        <FaUserAlt />
      </div>
    </header>
  );
};

export default Header;
