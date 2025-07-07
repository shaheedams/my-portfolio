import Heading from "../utility/heading";

const Contact = () => {
    return (
        <section id="Contact">
            <div className="ms-container mb-[100px]">
                <Heading name="Contact" />
                <div className="grid grid-cols-12">
                    <div className="link-01 col-span-4">
                        <h6 className="text-base text-msprimary font-normal tracking-widest mb-3">REACH ME AT</h6>
                        <div className="links text-xl font-light text-[#A1A1A2] flex flex-col gap-2">
                            <a href="mailto:mohamedshaheed8055@gmail.com">Gmail</a>
                            <a href="tel:+917339086231">+91 7339086231</a>
                        </div>
                    </div>
                    <div className="link-01 col-span-3">
                        <h6 className="text-base text-msprimary font-normal tracking-widest mb-3">SOCIALS</h6>
                        <div className="links text-xl font-light text-[#A1A1A2] flex flex-col gap-2">
                            <a href="https://www.linkedin.com/in/mohamed-shaheed-a-9497731b3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/shaheedams" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                    <div className="link-01 col-span-5">
                        <h6 className="text-base text-msprimary font-normal tracking-widest mb-3 uppercase">Get In Touch</h6>
                        <div className="links text-xl font-light text-[#A1A1A2] flex flex-col gap-2">
                           <p>I’d love to hear from you. Whether you have a question or just want to chat about development or anything — shoot me a message.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;