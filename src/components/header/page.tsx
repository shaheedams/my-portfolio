import Image from 'next/image'

const Header = () => {
  return (
    <header className='border-b border-msprimary sticky top-0 bg-msblack z-40 mainSection'>
      <div className="ms-container">
        <div className="flex items-center justify-between py-5">
          <div className="logo">
            <a href="#">
              <Image src="/logo-ms-white.svg" alt="logo" width="40" height="48" />
            </a>
          </div>
          <div className="links flex gap-[25px]">
            <a className='text-16 font-semibold' href="#">Home</a>
            <a className='text-16 font-semibold' href="#AboutMe">About Me</a>
            <a className='text-16 font-semibold' href="#Services">Services</a>
            <a className='text-16 font-semibold' href="#Experience">Experience</a>
            <a className='text-16 font-semibold' href="#Skills">Skills</a>
            <a className='text-16 font-semibold' href="#Projects">Projects</a>
            <a className='text-16 font-semibold' href="#Contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;