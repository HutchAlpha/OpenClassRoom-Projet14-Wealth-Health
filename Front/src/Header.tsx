import logo from './assets/logo.png';
import './scss/_Header.scss';
import { Link } from "react-router";

export default function Header() {
    return (
        <header className="header">
            <div className="header__divlogo">
                <img src={logo} alt="Logo Wealth Health" className="header__logo" />
            </div>

            <div className="header__divTitreNav">
                <div className="header__divTitre">
                    <h1 className="header__titre">Intranet HRnet</h1>
                </div>

                <div className="header__BarreNav">
                    <nav className="header__nav" aria-label="Navigation principale">
                        <ul className="header__nav-list">
                            <li><a href="/" className="header__nav-link">Home</a></li>
                            <li><a href="/salarie" className="header__nav-link">Employee</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}