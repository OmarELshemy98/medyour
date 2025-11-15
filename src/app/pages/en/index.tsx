import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';

const HomePageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />

      <main className="min-h-screen text-[#123D46] pt-[85px]">
        <div className="py-16 mt-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="rounded-tl-3xl rounded-br-3xl bg-cover bg-center hidden md:block relative overflow-visible" style={{ backgroundImage: "url('/images/background-img.png')" }}>
              <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 md:py-10 relative z-10">
                <div className="w-full relative z-20 text-left flex justify-start">
                  <div className="flex items-start gap-3 md:gap-4 flex-row w-fit">
                    <div className="flex flex-col text-left pl-6 md:pl-8 border-l-[6px] md:border-l-[8px] border-[#FFB800]">
                      <h1 className="font-roboto text-[2.5rem] sm:text-[2.1rem] font-[900] text-white uppercase leading-[2.6rem] mb-2 md:mb-3 whitespace-normal md:whitespace-nowrap">
                        Your Gateway to a better
                        <span className="block">Healthcare</span>
                      </h1>
                      <p className="font-roboto text-[2rem] font-[300] text-white leading-[2.4rem] text-left">
                        experience – Without Limits
                        <br />
                        Empowering Well-being Through
                        <br />
                        Innovative Care.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-full relative">
                  <div className="absolute right-[-4rem] top-[-30rem] w-[50rem] h-[65rem]">
                    <img src="/images/home-images/mob.png" alt="MedYour App" className="object-contain rotate-[6deg] w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-tl-3xl rounded-br-3xl bg-[#001117] md:hidden">
              <div className="flex flex-col items-center p-4">
                <div className="w-full relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="min-w-[0.25rem] h-[5rem] bg-[#FFB800] rounded-full self-stretch"></div>
                    <div className="flex flex-col">
                      <h1 className="text-[1.5rem] font-[900] text-white uppercase leading-[2rem] mb-2 whitespace-normal">
                        Your Gateway to a better Healthcare
                        <span className="block">experience – Without Limits</span>
                      </h1>
                      <p className="text-[1.25rem] font-[300] text-white leading-[1.75rem]">
                        Empowering Well-being Through
                        Innovative Care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-left text-[1.9375rem] font-[900] leading-[4.375rem]">Welcome to Medyour</h2>
            <p className="text-[1.125rem] block font-normal leading-[1.5rem]">Medyour is a cutting-edge platform providing an innovative approach to healthcare. Our integrated ecosystem delivers a seamless, flexible experience, connecting you with a wide network of top-tier healthcare providers across all specialties—without long waits or complex procedures.</p>
            <p className="text-[1.125rem] block font-normal leading-[1.5rem]">Whether you are an individual seeking premium care for yourself and your family, or an organization aiming for efficient, comprehensive healthcare management for your employees, Medyour combines usability, quality, and security in one platform.</p>
            <p className="text-[1.125rem] block font-bold pt-8 leading-[1.5rem]">Our mission is to deliver accessible, high-quality healthcare for everyone, without barriers</p>
          </div>
        </div>

        <div className="flex items-center w-[80%] mx-auto mt-8">
          <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]"></div>
          <div className="flex items-center">
            <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
            <div className="w-[200px] sm:w-[493px] border-t-[0.125rem] border-[#3A6070]"></div>
            <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          </div>
          <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]"></div>
        </div>

        <section>
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1 flex items-center justify-center md:justify-start mb-6 md:mb-0">
                  <h2 className="text-center md:text-left text-[31px] font-[900] leading-[70px] whitespace-nowrap pr-0">What Medyour Offers</h2>
                </div>
                <div className="flex-2 flex-[2] w-full">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
                      <div className="flex-1 flex flex-col text-left p-6 rounded-lg h-full justify-between">
                        <div className="flex flex-col h-full flex-1">
                          <div className="mb-2"></div>
                          <h3 className="text-[1.5rem] font-bold leading-[1.5rem] mt-2 mb-3 flex flex-col justify-center ">
                            <span className="block">Comprehensive </span>
                            <span className="block">Healthcare</span>
                            <span className="block">Coverage</span>
                          </h3>
                          <div className="flex-1"></div>
                          <p className="text-[1.3125rem] font-light leading-[1.375rem] flex items-center mt-4">Flexible and integrated plans for individuals and organizations, designed to simplify healthcare management while ensuring top-quality care without restrictions or limitations.</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col text-left p-6 rounded-lg h-full justify-between">
                        <div className="flex flex-col h-full flex-1">
                          <div className="mb-2"></div>
                          <h3 className="text-[1.5rem] font-bold leading-[1.5rem] mt-2 mb-3 flex flex-col justify-center ">
                            <span className="block">Instant and </span>
                            <span className="block">Reliable </span>
                            <span className="block">Care</span>
                          </h3>
                          <div className="flex-1"></div>
                          <p className="text-[1.3125rem] font-light leading-[1.375rem] flex items-center mt-4">Access healthcare instantly, anytime and anywhere you need, with a seamless, trustworthy experience always at your fingertips.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
                      <div className="flex-1 flex flex-col text-left p-6 rounded-lg h-full justify-between">
                        <div className="flex flex-col h-full flex-1">
                          <div className="mb-2"></div>
                          <h3 className="text-[1.5rem] font-bold leading-[1.5rem] mt-2 mb-3 flex flex-col justify-center ">
                            <span className="block">Full Management </span>
                            <span className="block">via Mobile </span>
                            <span className="block">App</span>
                          </h3>
                          <div className="flex-1"></div>
                          <p className="text-[1.3125rem] font-light leading-[1.375rem] flex items-center mt-4">Manage your healthcare journey effortlessly through our intuitive mobile app: book your medical services, pay securely, and track your results—all from your phone, any time.</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col text-left p-6 rounded-lg h-full justify-between">
                        <div className="flex flex-col h-full flex-1">
                          <div className="mb-2"></div>
                          <h3 className="text-[1.5rem] font-bold leading-[1.5rem] mt-2 mb-3 flex flex-col justify-center ">
                            <span className="block">Transparent </span>
                            <span className="block">Costs</span>
                          </h3>
                          <div className="flex-1"></div>
                          <p className="text-[1.3125rem] font-light leading-[1.375rem] flex items-center mt-4">Complete clarity on service costs—what you need is what you pay, with no hidden fees.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
                      <div className="flex-1 flex flex-col text-left p-6 rounded-lg h-full justify-between">
                        <div className="flex flex-col h-full flex-1">
                          <div className="mb-2"></div>
                          <h3 className="text-[1.5rem] font-bold leading-[1.5rem] mt-2 mb-3 flex flex-col justify-center ">
                            <span className="block">Healthcare for </span>
                            <span className="block">Everyone Without </span>
                            <span className="block"> Restrictions </span>
                          </h3>
                          <div className="flex-1"></div>
                          <p className="text-[1.3125rem] font-light leading-[1.375rem] flex items-center mt-4">No age limits, no exclusion for chronic or pre-existing conditions—everyone is welcome to benefit our healthcare services easily and without constraints</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col text-left p-6 rounded-lg h-full justify-between">
                        <div className="flex flex-col h-full flex-1">
                          <div className="mb-2"></div>
                          <h3 className="text-[1.5rem] font-bold leading-[1.3rem] mt-2 mb-3 flex flex-col justify-center ">
                            <span className="block">Extensive </span>
                            <span className="block">Network </span>
                            <span className="block">of Providers </span>
                          </h3>
                          <div className="flex-1"></div>
                          <p className="text-[1.3125rem] font-light leading-[1.375rem] flex items-center mt-2">Over 2,500 accredited healthcare providers across Egypt, including hospitals, clinics, specialists, labs, and pharmacies, all accessible through one integrated platform ensuring quality and reliability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center w-[80%] mx-auto mt-8">
          <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]"></div>
          <div className="flex items-center">
            <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
            <div className="w-[200px] sm:w-[493px] border-t-[0.125rem] border-[#3A6070]"></div>
            <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          </div>
          <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]"></div>
        </div>

        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-[31px] font-black leading-[70px]">Our Vision </h2>
            <p className="text-[18px] font-normal leading-[24px]">At Medyour, we aim to provide exceptional, accessible healthcare for everyone. We achieve this by adhering to the following core values: </p>
          </div>
        </div>

        <section className="py-8 md:py-12 mx-auto max-w-7xl">
          <div className="max-w-7xl mx-auto ">
            <div className="flex items-center gap-2 md:gap-4">
              <button className="carousel-button carousel-button-prev flex-shrink-0 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white shadow-lg text-gray-700 text-lg md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200" aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 16 36" fill="none" className="md:w-4 md:h-9">
                  <path d="M15 35L1 18L15 1" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <div className="flex-1 overflow-hidden rounded-xl">
                <div className="carousel-container flex transition-transform duration-500 ease-in-out">
                  <div className="carousel-slide flex-shrink-0 w-full">
                    <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tl-[70px] rounded-br-[70px] overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/Integrity.png')]"></div>
                      <div className="absolute inset-0 bg-[#00416C] mix-blend-color"></div>
                      <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                        <h3 className="text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] mb-4">Integrity</h3>
                        <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">We uphold the highest standards of transparency and honesty in all our interactions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-slide flex-shrink-0 w-full">
                    <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tr-[70px] rounded-bl-[70px] overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/innovation.png')]"></div>
                      <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                        <h3 className="text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] mb-4">Innovation</h3>
                        <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">We leverage cutting-edge technology to continuously improve the healthcare experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-slide flex-shrink-0 w-full">
                    <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tl-[70px] rounded-br-[70px] overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/accessibility.png')]"></div>
                      <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                        <h3 className="text-[#0E263E] flex-1 text-[1.7rem] font-[900] leading-[1.5rem] mb-4">Easy Access to Services</h3>
                        <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">We remove all barriers preventing people from obtaining healthcare, making the process faster and simpler than ever.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-slide flex-shrink-0 w-full">
                    <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tr-[90px] rounded-[10px] rounded-bl-[70px] overflow-hidden">
                      <div className="absolute inset-0 bg-no-repeat bg-cover bg-[url('/images/home-images/quality.png')]"></div>
                      <div className="absolute inset-0 bg-[#00416C] mix-blend-color"></div>
                      <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                        <h3 className="text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] mb-4">Quality</h3>
                        <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">We guarantee the highest standards of safety and performance in every service we deliver, because your health is always our priority.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-button carousel-button-next flex-shrink-0 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white shadow-lg text-gray-700 text-lg md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200" aria-label="Next slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 16 36" fill="none" className="md:w-4 md:h-9">
                  <path d="M0.5 0.999999L14.5 18L0.499999 35" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <HtmlFooterEn />
    </>
  );
};

export default HomePageEn;