import './style.scss';
import horns from '../../Images/tenor.gif';

function header() {
	return (
		<>

			<nav className="navbar">
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
					<div id="shadow-border">
						<ul className="menu" id="toggle-menu">
							<li>
								<a href="../index.js" className="active">
									Home
								</a>
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
			</nav>


		</>
	)
}

export default header;