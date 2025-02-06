import { Box, Grid, Tooltip } from "@mui/material";
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
        <div id="intro" className="w-auto mt-10">
          <Grid container className="flex justify-between items-center">
            <Grid item sm={12} md={8} xl={8}>
              <IntroComponent />
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              xl={4}
              className="relative overflow-hidden"
            >
              <AvatarComponent />
            </Grid>
          </Grid>
        </div>

        <Grid container sx={{ my: 10 }}>
          <Grid id="experience" item sm={12} md={6} xl={6}>
            <WorkingExperienceComponent />
          </Grid>

          <Grid id="projects" item sm={12} md={6} xl={6}>
            <ProjectComponent />
          </Grid>

          <Grid id="skills" item sm={12} md={6}>
            <TechnicalSkillComponent />
          </Grid>

          <Grid id="education" item sm={12} md={6}>
            <EducationComponent />
          </Grid>
        </Grid>

        <Box sx={{ my: 10 }}></Box>
      </div>

      <div className="fixed bottom-3 right-3">
        <Tooltip title="Back to top">
          <BackButton />
        </Tooltip>
      </div>
    </>
  );
}
