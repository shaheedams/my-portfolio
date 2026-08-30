import Heading from "../utility/heading";

const Experience = () => {

  const experienceArr = {
    experience: [
      {
        company: "R.R. Donnelley",
        role: "Full-Stack Developer",
        duration: "March 2023 - Present",
        points: ["Architected responsive UI components using Angular, achieving 95%+ crossdevice compatibility across all screen sizes.", "Engineered robust RESTful APIs with Node.js and Express.js, utilizing MongoDB for efficient data management and retrieval.", "Optimized application performance via lazy loading, code splitting, and database query optimization, resulting in a 35% reduction in load times.", "Standardized code quality by leading peer reviews and implementing automated testing strategies to minimize production bugs.", "Orchestrated stakeholder requirement gathering sessions to translate business objectives into high-precision technical specifications."]
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
