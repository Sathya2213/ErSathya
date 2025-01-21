import calculator from "../assets/cal.png";
import project2 from "../assets/food.jpg";
import project3 from "../assets/calc.jpg";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-peach-100 text-peach-50 bg-secondary ">
      <div className="w-full fly ">
        <div className="flex flex-col px-10 py-5">
          <center><h1 className="text-3xl font-semibold text-peach-50 border-b-2 border-[#203E62] mb-5 w-[136px] uppercase">
            Projects
          </h1>
          <p className="text-xl font-medium text-blue">Welcome to my project showcase! <br />Here, 
            you'll find a collection of my work that spans various aspects of Front-end development.</p></center>
        </div>
      </div>

      <div className="w-full ">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative fly">
          <img className="h-[300px] w-[500px]" src={calculator} />
          
            <div className="project-desc">
              <h1 className="text-center px-5 py-5 text-peach-100 font-suse font-bold text-2xl">Animated Calculator <br />HTML, CSS, JS</h1>
              <a href="https://projectanimatedcalculator.netlify.app/" target="_blank">
              <center>
                <button class="bg-peach-50 text-white font-bold font-suse py-2 px-4 rounded hover:bg-blue2 duration-500"> View Me</button>
                </center>
              </a>

            </div>
          </div>
          <div className="relative fly">
            <img className="h-[300px] w-[500px]" src={project2} />
            <div className="project-desc">
            <h1 className="text-center px-5 py-5 text-peach-100 font-suse font-bold text-2xl ">Doctor Appointment Booking System <br />ReactJS, MangoDB<br /> <i>Coming Soon...</i></h1>
            </div>
          </div>
          <div className="relative "> 
            <img className="h-[300px] w-[500px]" src={project3} />
            <div className="project-desc">
              <p className="text-center px-5 py-5 text-peach-100 font-suse font-bold text-2xl" >Sentimental anslysis <br />Python <br /> <i> Coming Soon...</i></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
