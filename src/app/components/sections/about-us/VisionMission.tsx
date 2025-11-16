import { aboutUsContent } from "../../../content/ar/about-us";

type VisionMissionProps = {
  content?: {
    story?: {
      title?: string;
      paragraphs?: string[];
    };
    visionMission?: {
      title?: string;
      description?: string;
      // removed points?: string[];
    };
    hero?:{
      title?:string;
      subtitle?:string
    };
  };
};

const VisionMissionSection = ({ content }: VisionMissionProps) => {
  // Use imported aboutUsContent as the main content source, allow prop override
  const story = content?.story ?? aboutUsContent.story;
  const visionMission = content?.visionMission ?? aboutUsContent.visionMission;
  const hero = content?.hero ?? aboutUsContent.hero;

  return (
    <>

      <section className="mobile-app-section py-[5rem] md:py-[8rem] bg-[rgba(0,255,212,0.11)] rounded-lg">
        <div className="w-[90%] mx-auto px-6 relative">
          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            <div
              className="hidden md:block absolute -top-[5rem] right-1/2 transform translate-x-4/6 w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float opacity-80">
            </div>
            <div className="space-y-6 relative">
              <div
                className="hidden md:block absolute top-[2rem] -left-[5rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80">
              </div>
              <section>
                <h2 className="text-right text-[1.9375rem] font-[900] leading-[4.375rem]" style={{ fontFamily: "'Cairo',sans-serif" }}>
                  {story?.title}
                </h2>
                {/* Render story paragraphs, support HTML line breaks */}
                {story?.paragraphs && Array.isArray(story.paragraphs) && story.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-right text-[1.125rem] font-normal leading-[1.8125rem] mt-2"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
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
              <section>
                <h2 className="text-right text-[1.9375rem] font-[900] leading-[4.375rem] mt-8">
                  {visionMission?.title}
                </h2>
                {visionMission?.description && (
                  <p
                    className="text-right text-[1.125rem] font-normal leading-[1.8125rem] mt-2"
                    dangerouslySetInnerHTML={{ __html: visionMission.description }}
                  />
                )}
                {/* Removed rendering of visionMission.points because it does not exist */}
              </section>
              <div
                className="hidden md:block absolute top-1/2 -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-60 blur-[2px]">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMissionSection;