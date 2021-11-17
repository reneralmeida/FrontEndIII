import "./style.scss";
import dataRef from '../../references.json'
import Card from "./Card";

function Portfolio() {
    return (
        <>
            <section className="projects" id="projects">
                <h1>Portfólio</h1>
                <div className="projects-tiles">
                    {
                        dataRef.project.map((obj) => {
                            return (<Card imgUrl={obj.imgUrl} projectname={obj.projectname} title={obj.title} code={obj.code} page={obj.page} />)
                        })
                    }

                </div>
            </section>
        </>
    );
}

export default Portfolio;