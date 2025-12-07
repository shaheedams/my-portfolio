import Image from "next/image";
// import BtnSecondary from "./btnSrecondary";

interface ProjectCardType {
    image: string,
    heading: string,
    content: string,
    subHeading: string,
    link: string,
    stack: string,
}

const ProjectCard = ({ image, heading, subHeading, content, stack }: ProjectCardType) => {
    return (
        <div className="projectCard p-[30px] border-1 rounded-md flex items-center mb-[40px] gap-[40px]">
            <div className="w-[40%]">
                <Image width="551" height="300" src={image} alt="project-image" />
            </div>
            <div className="w-[60%]">
                <div className="subHeading text-base font-normal text-msprimary mb-2 tracking-widest">{subHeading}</div>
                <h5 className="font-normal text-[40px] mb-2">{heading}</h5>
                <p className="mb-2 font-light text-base">{content}</p>
                <p className="font-light text-base mb-[40px]"><span className="text-msprimary">Tech stack: </span>{stack}</p>
                {/* <BtnSecondary name="View project" pathLink={link} isDownload={false}/>  */}
            </div>

        </div>
    )
}

export default ProjectCard;