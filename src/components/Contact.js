export default function Contact() {
  return (
    <section id="contact" className="flex flex-col bg-secondary px-5 py-32">
      <div className=" flex flex-col items-center fly">
        <h1 className="text-3xl font-semibold text-peach-50 uppercase border-b-2 border-[#203E62] mb-5 w-[130px]">
          Contact{" "}
        </h1>
        <p className="text-blue  font-suse font-medium text-lg">
          If you want to discuss more, please contact me
        </p>
        <div className="flex text-blue py-2 font-suse font-medium">
            <a href="mailto:sathyakjayakumar@gmail.com"><h4>sathyakjayakumar@gmail.com</h4> </a><span className='text-blue px-3 font-bold'> | </span>

            <a href="https://www.linkedin.com/in/sathya-j-303518241" target="_blank">Linkedin</a>
        </div>
      </div>
    </section>
  );
}
