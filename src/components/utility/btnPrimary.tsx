export interface BtnTypes {
    pathLink: string,
    name: string,
    isDownload: boolean
}

const BtnPrimary = ({ pathLink, name }: BtnTypes) => {
    return (
        <a href={pathLink} className="ms-btn ms-btn-primary mr-4">{name} <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M12 1.58997L2 11.59M12 1.58997C12 1.58997 10.6111 2.14552 7.83333 2.14552C5.05556 2.14552 3.66667 1.58997 3.66667 1.58997M12 1.58997C12 1.58997 11.4444 2.97885 11.4444 5.75663C11.4444 8.53441 12 9.9233 12 9.9233" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
        </svg></span></a>
    )
}

export default BtnPrimary;