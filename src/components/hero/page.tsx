import BtnPrimary from "../utility/btnPrimary";
import BtnSecondary from "../utility/btnSrecondary";

const Hero = () => {
  return (
    <section id="Hero" className="mainSection">
      <div className="ms-container">
        <div className="heroContainer w-1/2 my-[100px]">
          <div className="helloText text-20 font-semibold">Hi There, I&apos;m</div>
          <h3 className="myName text-[56px] font-semibold mb-[16px] whitespace-nowrap">Mohamed Shaheed A</h3>
          <div className="roleAni">
            <h5 className="font-semibold text-28 mb-[16px]">Full-stack developer</h5>
          </div>
          <div className="bio text-18 font-extralight mb-[16px]">I am a motivated and solution-orientated full-stack developer with experience in application development across diverse tech stacks.</div>
          <BtnPrimary pathLink="#Projects" name="My Projects" isDownload={false} />
          <BtnSecondary pathLink="#Contact" name="Get in touch" isDownload={false} />
        </div>
      </div>
    </section>
  )
}

export default Hero;