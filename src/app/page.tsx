import HeaderComponent from "@/components/header/TheHeader";
import FooterComponent from "@/components/footer/TheFooter";
import { Box, Container, Grid, Tooltip } from "@mui/material";
import IntroComponent from "@/components/Introduciton";
import AvatarComponent from "@/components/Avatar";
import WorkingExperienceComponent from "../components/WorkingExperience";
import ProjectComponent from "../components/Projects";
import TechnicalSkillComponent from "@/components/TechnicalSkills";
import EducationComponent from "@/components/Education";
import BackButton from "@/components/BackButton";

export default function Home() {
  return (
    <>
      <Container>
        <header>
          <HeaderComponent />
        </header>

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

        <Box sx={{ my: 10 }}>
          <Grid container>
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
          <footer id="contact" className="flex justify-center my-10">
            <FooterComponent />
          </footer>
        </Box>
      </Container>

      <Tooltip title="Back to top">
        <div className="fixed bottom-3 right-3">
          <BackButton />
        </div>
      </Tooltip>
    </>
  );
}
