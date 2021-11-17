import dataRef from "../../references.json";
import "./style.scss";
import pic from '../../Images/test.jpg';

function Banner() {
	return (
		<>
			<section className="about" id="about">
				<div className="container">
					<h2 className="title"></h2>
					<div className="about-content">
						<div className="column left">
							<img
								id="profile-pic"
								src={pic}
								alt="avatar"
								height="150px"
							/>
						</div>
						<div className="column right">
							<div className="text">
							</div>
							<p>{dataRef.about.p1}</p>
							<p>{dataRef.about.p2}</p>
						</div>
					</div>
				</div>
			</section>
			<br></br>
			<br></br>
		</>
	);
}

export default Banner;