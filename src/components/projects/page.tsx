import Heading from "../utility/heading";
import ProjectCard from "../utility/projectCard";

interface projectTypes {
  image: string,
  heading: string,
  content: string,
  subHeading: string,
  link: string,
  stack: string
}

const Projects = () => {

  const projectsArr: projectTypes[] = [{
    image: "/cms.png",
    heading: "Content management system",
    content: "CMS is a software platform used to handle changes in website content creation, enabling multiple authors to develop, update and export websites with the help of our web application.",
    subHeading: "CMS",
    link: "#",
    stack: "Next.js, Redux, Express.js, MongoDB, JWT, MUI, Node.js, Typescript."
  }, {
    image: "/tracker.png",
    heading: "Work management system",
    content: "Tracker is a web application used to handle employees day to day tasks, managing clients and projects, monitoring hours utilized by a person and total hours to complete a task.",
    subHeading: "TRACKER",
    link: "#",
    stack: "React, Redux, Express.js, MongoDB, JWT, React router, Node.js, Typescript."
  }, {
    image: "/landingPage.png",
    heading: "Leading brands",
    content: "Developed high-converting, responsive landing pages from scratch, focusing on user experience (UX), brand consistency, and lead generation goals for various clients.",
    subHeading: "LANDING PAGES",
    link: "#",
    stack: "HTML, CSS, Javascript, Jquery, swiper.js, GSAP."
  },];

  return (
    <section id="Projects" className="mainSection">
      <div className="ms-container mb-[100px]">
        <Heading name="Projects" />
        <div className="projectsConatiner">
          {
            projectsArr.map((data, index) => {
              return (
                <div key={`${index}Project`}>
                  <ProjectCard image={data.image} heading={data.heading} content={data.content} subHeading={data.subHeading} link={data.link} stack={data.stack} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects;