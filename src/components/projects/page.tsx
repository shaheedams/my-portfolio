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
    content: "Developed a comprehensive content management platform enabling multiple authors to create, update, and export website content. Built dynamic content creation interface with real time validation and preview functionality.",
    subHeading: "CMS",
    link: "#",
    stack: "Next.js, Node.js, Typescript, Express.js, MongoDB, JWT, MUI, Redux."
  }, {
    image: "/tracker.png",
    heading: "Work management system",
    content: "Built a comprehensive task and project management application for employee productivity tracking. Implemented task assignment, status tracking, time logging, project timeline management features and role-based access control (RBAC).",
    subHeading: "TRACKER",
    link: "#",
    stack: "React.js, Node.js, Typescript, Express.js, MongoDB, JWT, MUI, Redux."
  }, {
    image: "/landingPage.png",
    heading: "Landing Pages (B2B/B2C)",
    content: "Developed high-converting, responsive landing pages for multiple clients from design mockups to production. Implemented smooth animations using GSAP and complex UI functionality.",
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