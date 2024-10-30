import { skillData } from "@/assets/libs/data";
import { Box, Typography } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

export default function TechnicalSkillComponent() {
  return (
    <>
      <button className="button" data-text="Project">
        <span className="">&nbsp;technical skills&nbsp;</span>
      </button>
      <Box>
        {skillData.map((skill) => {
          return (
            <Box
              key={skill.id}
              my={2}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <CheckCircleOutline
                color="success"
                fontSize="medium"
                className="mx-2"
              />
              <Box>
                <Typography variant="body1" className="uppercase">
                  {skill.title}
                </Typography>
                <Typography variant="body2" className="pr-5">
                  {skill.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
