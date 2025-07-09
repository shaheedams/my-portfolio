import Heading from "../utility/heading";

const Skills = () => {

    const skillsArr: string[] = ["HTML", "CSS", "Scss", "Javascript", "Typescript", "React", "Next.js", "Node.js", "Express.js", "Mongo DB", "JQuery", "GSAP", "SWiper", "GIT", "jira", "VS CODE", "GIT hub"];

    return (
        <section id="Skills" className="mainSection">
            <div className="ms-container mb-[100px]">
                <Heading name="Tech Stack" />
                <div className="skillsContainer text-center">
                    {
                        skillsArr?.map((name: string, index: number) => {
                            return (
                                <div key={`${index}skills}`} className="skill text-xl text-msprimary border-1 uppercase m-2 inline-block p-3 rounded-[100px]">
                                    {name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;