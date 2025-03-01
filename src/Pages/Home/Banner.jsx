const Banner = () => {
  return (
    <div>
      <div className="carousel lg:max-w-9/12  rounded-b-xl h-[40vh] lg:h-[70vh]">
        <div id="slide1" className="carousel-item relative w-full  ">
          {/* title */}
          <div className="bg-black/30 absolute  w-full h-full flex flex-col justify-center items-center lg:items-start text-white P-8 space-y-10 lg:pl-16">
            <h1 className="text-3xl lg:text-5xl font-serif font-bold text-center animate__slow animate__animated animate__fadeInUp ">
              Proactively strategize tactical <br /> mindshare with.
            </h1>
            <h1 className="lg:text-3xl text-center hidden lg:block animate__slow animate__animated animate__fadeInUp lg:ml-16 p-6 rounded-2xl bg-purple-200 text-indigo-900 ">
              Progressively syndicate extensible growth.
            </h1>
          </div>
          <img src="https://i.ibb.co/jRDpcq4/Banner-3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="bg-black/30 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
            <h1 className="animate__animated animate__fadeInDown animate__slow text-3xl lg:text-6xl font-serif font-bold text-center ">
              Strategize technically sound.
            </h1>
            <h1 className="lg:text-3xl text-center animate__slow animate__animated animate__fadeInUp rounded-2xl">
              Interactively communicate an expanded.
            </h1>
          </div>
          <img src="https://i.ibb.co/sVKfqKR/Banner-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="bg-black/30 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
            <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center animate__animated animate__rubberBand animate__slow">
              Study With Group of Professionals
            </h1>
            <h1 className="lg:text-3xl text-center animate__animated animate__fadeInUp animate__slow rounded-2xl  ">
              Experience Your learning platform
            </h1>
          </div>
          <img src="https://i.ibb.co/K0ThTGM/Banner-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
