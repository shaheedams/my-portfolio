import Image from "next/image";

interface ServiceCardType{
    image: string,
    heading: string,
    content: string,
}

const ServiceCard = ({image, heading, content}: ServiceCardType)=>{
    return(
        <div className="serviceCard p-[24px] border-1 rounded-md">
            <Image width="56" height="56" src={image} alt="service-icon" className="mb-4"/>
            <h6 className="mb-2 font-normal text-xl">{heading}</h6>
            <p className="mb-4 font-extralight text-lg">{content}</p>
        </div>
    )
}

export default ServiceCard;