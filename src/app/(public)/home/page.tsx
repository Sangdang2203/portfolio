import IntroComponent from "./Introduciton";
import WorkingExperienceComponent from "./WorkingExperience";
import ProjectComponent from "./Projects";
import TechnicalSkillComponent from "./TechnicalSkills";
import EducationComponent from "./Education";

export default function HomePage() {
  return (
    <>
      <section
        id="intro"
        className="my-5 w-full grid grid-col-1 lg:grid-cols-2"
      >
        <IntroComponent />
      </section>

      <section id="experience" className="my-10">
        <WorkingExperienceComponent />
      </section>

      <section id="projects" className="my-10">
        <ProjectComponent />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div id="skills" className="my-10">
          <TechnicalSkillComponent />
        </div>
        <div id="education" className="my-10">
          <EducationComponent />
        </div>
      </section>
    </>
  );
}
