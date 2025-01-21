import ResumeImg from "../assets/resume.png";
import resume from "../assets/SathyaResume..pdf";

export default function Resume() {
  return (
    <section id="resume" className = "flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 py-1 flex justify-end fly">
        <img className="w-[500px]" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex ml-10">
        <div className="flex flex-col justify-center fly">
        <h1 className="text-3xl uppercase font-semibold text-peach-50 border-b-2  border-[#203E62] mb-2 w-[115px]">Resume </h1>
        <p className="text-blue text-xl py-2 ">You can view my resume  </p>
        <button className="mt-8 ">
          <a className="btn" href={resume} download='SathyaResume' target="_blank">Download</a>
          </button>
        </div>
        
      </div>
    </section>
  );
}
