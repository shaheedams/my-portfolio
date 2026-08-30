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
    content: "Developed a full-stack platform enabling multiauthor collaboration for content creation, updates, and exporting. Built a dynamic UI with real-time validation and preview functionality, reducing content publishing time by 60%",
    subHeading: "CMS",
    link: "#",
    stack: "Angular, Node.js, Typescript, Express.js, MongoDB, JWT, MUI, RxJs."
  }, {
    image: "/tracker.png",
    heading: "Work management system",
    content: "Spearheaded the development of an employee productivity application featuring role-based access control (RBAC). Implemented real-time task status tracking, time logging, and project timeline management, improving tracking accuracy by 50%.",
    subHeading: "TRACKER",
    link: "#",
    stack: "Angular, Node.js, Typescript, Express.js, MongoDB, JWT, MUI, RxJs."
  }, {
    image: "/landingPage.png",
    heading: "Landing Pages (B2B/B2C)",
    content: "Produced high-converting, responsive landing pages from initial design mockups to production. Integrated complex UI functionality and smooth animations using GSAP to enhance user experience.",
    subHeading: "LANDING PAGES",
    link: "#",
    stack: "HTML, CSS, Javascript, Jquery, swiper.js, GSAP, Chart.js, Apex chat, SCSS, Animations."
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
