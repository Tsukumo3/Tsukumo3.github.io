import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
      <div className="mdl-layout__header-row portfolio-logo-row">
        <span className="mdl-layout__title">
          <Link to="/">
            <div className="portfolio-logo"></div>
          </Link>
        </span>
      </div>
      <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
        <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
          <Link className="mdl-navigation__link" to="/portfolio">portfolio</Link>
          <Link className="mdl-navigation__link" to="/blog">blog</Link>
          <Link className="mdl-navigation__link" to="/about">about</Link>
          <Link className="mdl-navigation__link" to="/contact">contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;