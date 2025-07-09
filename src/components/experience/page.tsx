import Heading from "../utility/heading";

const Experience = () => {

  const experienceArr = {
    experience: [
      {
        company: "R.R. Donnelley",
        role: "Full-Stack Developer",
        duration: "March 2023 - Present",
        points: ["Work closely with stakeholders to gather requirements and translate them into technical specifications, ensuring alignment with business objectives.", "Create and implement scalable web applications using modern frameworks such as React, Next.js, Node.js, Express.js and MongoDB, ensuring responsive design and optimal performance across devices."]
      }, {
        company: "The Sparks Foundation",
        role: "Intern - Full-Stack Developer",
        duration: "May 2021 - Jun 2021",
        points: ["Worked as an intern,  Created and deployed a banking web application with certain functions like transferring money , showing Transaction details , balance, User details using MERN stack."]
      }, {
        company: "Exposys Data Labs",
        role: "Intern - Web Developer",
        duration: "Apr 2021 - May 2021",
        points: ["Developed a website, Turn design of the pages and specific components into a functional website using HTML, CSS, JavaScript."]
      }
    ], education: [
      {
        institute: "BSA Crescent Institute of Science and Technology, Chennai",
        degree: "BCA, Cloud technology and Information Security",
        duration: "2018 - 2021",
        points: ["Project: 'CRESCHAT' - Student & Teacher social media web application"]
      }
    ]
  };


  return (
    <section id="Experience" className="mainSection">
      <div className="ms-container mb-[100px]">
        <Heading name="Experience" />
        <div className="grid grid-cols-12 gap-[80px]">
          <div className="experience col-span-6">
            <h6 className="mb-[40px] text-base font-normal tracking-widest uppercase text-msprimary ml-[58px]">Experience</h6>
            <div className="timeLines pl-[58px]">
              {
                experienceArr?.experience?.map((data, index) => {
                  return (
                    <div className={`timeLine ${index !== 0 ? "mt-[60px]" : ''}`} key={`${index}experience`}>
                      <h3 className="font-normal text-[28px] heading">{data.company}</h3>
                      <h6 className="text-xl font-light">{data.role}</h6>
                      <div className="duration text-sm font-light text-[#5B5B5C] tracking-widest uppercase">{data.duration}</div>
                      <ul className="text-[#A1A1A2] text-lg font-light list-disc ml-[20px] mt-2">
                        {
                          data.points.map((point, index) => {
                            return (
                              <li className={`${data.points.length - 1 !== index ? 'mb-2' : ''}`} key={`${index}keyPoint`}>{point}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="education col-span-6">
            <h6 className="mb-[40px] text-base font-normal tracking-widest uppercase text-msprimary ml-[58px]">education</h6>
            <div className="timeLines pl-[58px]">
              {
                experienceArr?.education?.map((data, index) => {
                  return (
                    <div className={`timeLine ${index !== 0 ? "mt-[60px]" : ''}`} key={`${index}education`}>
                      <h3 className="font-normal text-[28px] heading">{data.institute}</h3>
                      <h6 className="text-xl font-light">{data.degree}</h6>
                      <div className="duration text-sm font-light text-[#5B5B5C] tracking-widest uppercase">{data.duration}</div>
                      <ul className="text-[#A1A1A2] text-lg font-light list-disc ml-[20px] mt-2">
                        {
                          data.points.map((point, index) => {
                            return (
                              <li className={`${data.points.length - 1 !== index ? 'mb-2' : ''}`} key={`${index}keyPoint`}>{point}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;