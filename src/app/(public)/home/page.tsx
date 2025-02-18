import IntroComponent from "./Introduciton";
import WorkingExperienceComponent from "./WorkingExperience";
import ProjectComponent from "./Projects";
import TechnicalSkillComponent from "./TechnicalSkills";
import EducationComponent from "./Education";
import AvatarComponent from "@/components/Avatar";
import BackButton from "@/components/BackButton";

export default function HomePage() {
  return (
    <>
      <div>
        <div id="intro" className="w-full grid grid-col-1 lg:grid-cols-2">
          <div className="my-5">
            <IntroComponent />
          </div>
          <div className="flex justify-center lg:flex lg:justify-end">
            <AvatarComponent />
          </div>
        </div>

        <section id="experience" className="my-5">
          <WorkingExperienceComponent />
        </section>

        <section id="projects" className="my-5">
          <ProjectComponent />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 my-5">
          <div id="skills">
            <TechnicalSkillComponent />
          </div>
          <div id="education">
            <EducationComponent />
          </div>
        </section>
      </div>

      <div className="fixed bottom-3 right-3" title="Back To Top">
        <BackButton />
      </div>
    </>
  );
}
