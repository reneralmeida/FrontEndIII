import './style.scss';

const Header = ({empresa}) => {

    return (
        <header id="header">
            <h1>{empresa}</h1>
            <nav>
                <ul>
                    <li><a href="#">Whatever</a></li>
                    <li><a href="#galeria">Whenever</a></li>
                    <li><a href="#footer">Whoever</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;