const Hero = () => {
  return (
    <section id="Hero">
      <div className="ms-container">
        <div className="heroContainer w-1/2 my-[100px]">
          <div className="helloText text-20 font-semibold">Hi There, I&apos;m</div>
          <h3 className="myName text-[56px] font-semibold mb-[16px] whitespace-nowrap">Mohamed Shaheed A</h3>
          <div className="roleAni">
            <h5 className="font-semibold text-28 mb-[16px]">Full-stack</h5>
          </div>
          <div className="bio text-18 font-extralight mb-[16px]">I am a motivated and solution-orientated full-stack developer with experience in application development across diverse tech stacks.</div>
          <a href="#Projects" className="ms-btn ms-btn-primary mr-4">My Projects <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M12 1.58997L2 11.59M12 1.58997C12 1.58997 10.6111 2.14552 7.83333 2.14552C5.05556 2.14552 3.66667 1.58997 3.66667 1.58997M12 1.58997C12 1.58997 11.4444 2.97885 11.4444 5.75663C11.4444 8.53441 12 9.9233 12 9.9233" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
          </svg></span></a>
          <a href="#Projects" className="ms-btn ms-btn-secondary">Get in touch <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M12 1.58997L2 11.59M12 1.58997C12 1.58997 10.6111 2.14552 7.83333 2.14552C5.05556 2.14552 3.66667 1.58997 3.66667 1.58997M12 1.58997C12 1.58997 11.4444 2.97885 11.4444 5.75663C11.4444 8.53441 12 9.9233 12 9.9233" stroke="#E2FF55" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
          </svg></span></a>
        </div>
      </div>
    </section>
  )
}

export default Hero;