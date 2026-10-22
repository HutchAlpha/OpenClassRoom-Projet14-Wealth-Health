import logo from './assets/logo.png';
import './scss/_Header.scss';

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Wealth Health" className="header__logo" />

            <div className="titre">
                <h1 className="titre__h1">HRnet</h1>
            </div>
        </header>
    )
}