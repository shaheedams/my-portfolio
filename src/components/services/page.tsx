import Heading from "../utility/heading";
import ServiceCard from "../utility/serviceCard";

const Services = () => {
    return (
        <section id="Services" className="mainSection">
            <div className="ms-container mb-[200px]">
                <Heading name="Services" />
                <div className="servicesCards flex gap-[20px]">
                    <ServiceCard image={"/services-icon-1.svg"} heading={"Frontend Development"} content={"I specialize in creating responsive, user-friendly interfaces using modern frameworks. My focus is on delivering pixel-perfect designs and seamless user experiences that work flawlessly across all devices."} />
                    <ServiceCard image={"/services-icon-2.svg"} heading={"Backend Development"} content={"I build robust and scalable server-side applications using modern technologies. My emphasis is on performance, security, and developing clean, efficient APIs to power your applications."} />
                    <ServiceCard image={"/services-icon-3.svg"} heading={"Full Stack Solutions"} content={"I provide end-to-end web development by integrating frontend, backend. From concept to deployment, I deliver customized, high-quality solutions tailored to your needs, ensuring your vision becomes reality."} />
                </div>
            </div>
        </section>
    )
}

export default Services;