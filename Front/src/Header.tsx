import logo from './assets/logo.png';
import './scss/_Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header__divlogo">
                <img src={logo} alt="Logo Wealth Health" className="header__logo" />
            </div>

            <div className="header__divTitre">
                <h1 className="header__titre">Intranet HRnet</h1>
            </div>
        </header>
    );
}