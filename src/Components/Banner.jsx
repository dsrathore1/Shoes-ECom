import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <>
      <div className="h-[80vh] w-full relative">
        <div className="absolute top-[12rem] left-5">
          <h1 className="text-xl opacity-70 tracking-widest uppercase font-light text-white">
            Trending of the week
          </h1>
          <h1 className="uppercase text-8xl opacity-40 font-bold text-white w-[72%] product-title tracking-wide flex justify-center items-end">
            casual shoes for
            <Typewriter
              options={{
                strings: ["MEN", "WOMEN", "KIDS"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="h-[20%] mt-10 space-x-10">
            <button className="bg-white px-12 rounded shadow-lg uppercase text-blue-400 font-extrabold py-3">
              Shop now
            </button>
            <button className="bg-white px-12 rounded shadow-lg uppercase py-3 font-bold">
              Show more
            </button>
          </div>
        </div>
        <img
          className="h-full w-full object-none object-left"
          alt="#productImg"
          src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
}
