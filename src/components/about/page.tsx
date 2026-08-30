import BtnSecondary from "../utility/btnSrecondary";
import Heading from "../utility/heading";
import Image from 'next/image';

const About = () => {
    return (
        <section id="AboutMe" className="mainSection">
            <div className="ms-container mb-[100px]">
                <Heading name="About Me" />
                <div className="flex gap-[76px] w-full font-extralight justify-between">
                    <div className="aboutLeft w-[40%]">
                        <div className="profile">
                            <Image src="/profile-pic.png" alt="profile-pic" width="480" height="510" />
                        </div>
                        <div className="getInTouch flex gap-[40px] mt-[76px]">
                            <div className="resumeDownload">
                                <BtnSecondary pathLink="/mohamed_shaheed_resume.pdf" name="Download CV" isDownload={true} />
                            </div>
                            <div className="socialLinks flex gap-5 items-center">
                                <a href="https://www.linkedin.com/in/mohamed-shaheed-a-9497731b3" target="_blank" rel="noopener noreferrer">
                                    <Image src="/linkdin.png" alt="linkedin" width="50" height="50" />
                                </a>
                                <a href="https://github.com/shaheedams" target="_blank" rel="noopener noreferrer">
                                    <Image src="/git.png" alt="git" width="50" height="50" />
                                </a>
                                <a href="mailto:mohamedshaheed8055@gmail.com">
                                    <Image src="/gmail.png" alt="gmail" width="50" height="50" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="aboutRight text-2xl w-[60%]">
                        <p className="mb-5">Full Stack Developer with over 3.5+ years of experience specializing in high-performance web applications using the Angular, Express.js, MongoDB and TypeScript.</p>
                        <p className="mb-5">Expert in frontend frameworks and backend API development, with a proven ability to deliver production-ready code through cross-functional collaboration.</p>
                        <p className="mb-5">Focused on writing clean, scalable code that significantly improves user engagement and operational efficiency.</p>
                        <h6 className="text-msprimary mb-2">Certification / Awards:</h6>
                        <ul className="list-disc">
                            <li className="ml-[25px]">Received the <strong>&quot;Achiever of the Quarter&quot;</strong> Award for best performance, R.R. Donnelley - <strong>(2024, 2026)</strong></li>
                            <li className="ml-[25px]">Received the <strong>&quot;Rising Star of the Year&quot;</strong> Award for outstanding work in the Tracker, R.R. Donnelley - <strong>(2025)</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;

