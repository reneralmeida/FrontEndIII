import '../style.scss';
import horns from '../../../Images/tenor.gif';

function MobileMenu() {
  return (
    <>
      <nav className="navbar-sm">
        <div className="navmain" id="navmain">
          <div className="logo">
            <span>
              <img
                src={horns}
                alt="img"
                className="logoimg"
              />
            </span>
          </div>

          <div id="hamburger-menu">
            <input type="checkbox" id="menu-hamburger-checkbox" />
            <label for="menu-hamburger-checkbox" aria-labelledby="menu-toggle">&#9776; </label>

            <div id="menu-items-container">
              <ul id="menu-items">
                <li>
                  <a href="../index.js">Home</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#projects">Projetos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default MobileMenu;