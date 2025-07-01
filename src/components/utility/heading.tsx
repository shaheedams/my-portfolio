const Heading = ({ name }: { name: string }) => {
    return (
        <div className="text-wrapper text-center">
            <h2 className="text-[100px] font-normal text-stroke-3 ">{name}</h2>
            <div className="subText text-[32px] font-semibold">
                {name}
            </div>
        </div>
    )
}

export default Heading;