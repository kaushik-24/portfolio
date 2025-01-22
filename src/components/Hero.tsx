import Type from "./ui/Type";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* Hero Text */}
      <div className="text-center">
        <h1 className="text-[8vh] sm:text-[10vh] font-[Nerd-Regular] leading-tight">
          Hi, <span className="text-blue-500 underline">I am</span>
          <br />
          <Type />
        </h1>
      </div>

      {/* Additional Section */}
      <div className="mt-8 text-lg text-gray-600">
        <p>dawd</p>
      </div>
    </div>
  );
};

export default Hero;

