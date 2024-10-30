import HeaderComponent from "@/components/header/TheHeader";
import FooterComponent from "@/components/footer/TheFooter";
import { Grid } from "@mui/material";
import IntroComponent from "@/components/Introduciton";
import AvatarComponent from "@/components/Avatar";
import WorkingExperienceComponent from "./(public)/experience/WorkingExperience";
import ProjectComponent from "./(public)/projects/ProjectPage";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <HeaderComponent />
      </header>

      <div id="intro" className="w-auto">
        <Grid container className="flex justify-between items-center">
          <Grid item sm={12} md={8} xl={8}>
            <IntroComponent />
          </Grid>
          <Grid item sm={12} md={4} xl={4} className="relative overflow-hidden">
            <AvatarComponent />
          </Grid>
        </Grid>
      </div>

      <Grid container>
        <Grid id="experience" item sm={12} md={6} xl={6}>
          <WorkingExperienceComponent />
        </Grid>

        <Grid id="project" item sm={12} md={6} xl={6}>
          <ProjectComponent />
        </Grid>
      </Grid>

      <footer className="flex justify-center">
        <FooterComponent />
      </footer>
    </div>
  );
}
