import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Drawer() {
    const location = useLocation();

    useEffect(() => {
        const closeDrawer = () => {
            const drawer = document.querySelector('.mdl-layout__drawer');
            const obfuscator = document.querySelector('.mdl-layout__obfuscator');
            if (drawer && obfuscator) {
                drawer.classList.remove('is-visible');
                obfuscator.classList.remove('is-visible');
            }
        };

        // ロケーションの変更を監視し、ドロワーを閉じる
        closeDrawer();
    }, [location]);

    return (
        <div className="mdl-layout__drawer mdl-layout--small-screen-only">
            <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                <Link className="mdl-navigation__link" to="/">Home</Link>
                <Link className="mdl-navigation__link" to="/Portfolio">Portfolio</Link>
                <Link className="mdl-navigation__link" to="/blog">Blog</Link>
                <Link className="mdl-navigation__link" to="/about">Abot</Link>
                <Link className="mdl-navigation__link" to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Drawer;