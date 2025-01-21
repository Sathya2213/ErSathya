import img1 from "../assets/me4.png";
import { AiOutlineLinkedin,AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

export default function Heroien() {
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center ">
      <div className="md:w-1/2 flex-col ">
        <h1 className=" text-peach-50 text-5xl font-Gfont block">
          Hi, <br/> I Am <span className="text-blue">Sathya</span> Jayakumar
          <p className="text-5xl text-blue">Front-end Developer</p>
          
        </h1>

        <div className="flex py-10 fly text-blue">
        <a href="https://www.linkedin.com/in/sathya-j-303518241" target="_blank" className="pr-5 hover:text-peach-50 transition duration-1000 "  ><AiOutlineLinkedin size={40}/></a>
        <a href=""  className="pr-5 hover:text-peach-50 transition duration-1000"  ><AiOutlineInstagram size={40}/></a>
        <a href="https://github.com/Sathya2213" target="_blank" className="pr-5 hover:text-peach-50 transition duration-1000"  ><AiOutlineGithub size={40}/></a>
      </div>

      </div>
      

      <img className="md:w-1/4" src={img1} alt="" />
    </section>
  );
}
