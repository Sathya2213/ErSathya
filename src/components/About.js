import Aboutimg from "../assets/me3.png";


export default function About() {
  return (
    <section className = "flex flex-col md:flex-row bg-secondary px-20" id="about">
      <div className="md:w-1/2 py-0 fly">
        <img src={Aboutimg} />
      </div>
      <div className="md:w-1/2 flex justify-center fly">
        <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-semibold text-peach-50 uppercase border-b-2  border-[#203E62] mb-5 w-[122px] ">About Me</h1>
        <p className="text-blue text-xl font-normal ">▶I'm <span className="font-bold ">Sathya Jayakumar😃</span>, a dedicated <span  className="font-bold ">Front-end developer</span> with a strong passion for turning ideas into reality through innovative technology.
        <br  />▶My journey in Front-end development is driven by a love for <span className="font-bold ">learning</span> and a desire to <span className="font-bold ">create impactful solutions.</span> 
        <br />▶I enjoy working closely with <span className="font-bold ">clients and teams</span> to bring visions to life, always aiming for clarity, efficiency, and creativity in every project. 
        <br /><span className="font-bold ">▶My approach is simple: listen carefully, think critically, and build with passion.</span> </p>
        </div>
        
      </div>
    </section>
  );
}
