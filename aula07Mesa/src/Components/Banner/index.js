import './style.css';

const Banner = ({ children }) => {

    return (
        <section id="bannerr">
            <div className="banner-text">
                <div className="banner-text">
                    {children}
                </div>

                <h2>Whatever?</h2>
                <p>
                    lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet.
                </p>
            </div>
        </section>
    )
};

export default Banner;

