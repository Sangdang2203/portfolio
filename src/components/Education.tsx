import { certificationData } from "@/assets/libs/data";
import {
  CalendarMonth,
  LocationOn,
  School,
  Speed,
  WorkspacePremium,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function EducationComponent() {
  return (
    <>
      <button className="button" data-text="Experience">
        <span className="">&nbsp;education&nbsp;</span>
      </button>
      <Box m={2}>
        <Typography variant="h6">Software Engineering</Typography>
        <div className="flex my-2 items-start">
          <School fontSize="small" className="mr-2" />
          <Typography>FPT Academy International (FAI)</Typography>
        </div>
        <div className="flex my-2 items-start">
          <CalendarMonth fontSize="small" className="mr-2" />
          <Typography variant="body2">10/2022 - 10/2024</Typography>
        </div>
        <div className="flex my-2 items-start">
          <LocationOn fontSize="small" className="mr-2" />
          <Typography variant="body2">
            391A Nam Ky Khoi Nghia, Vo Thi Sau Ward, District 3, HCMC, Vietnam.
          </Typography>
        </div>
        <div className="flex my-2 items-start">
          <Speed fontSize="small" className="mr-2" />
          <Typography variant="body2">GPA: 78/100</Typography>
        </div>
      </Box>

      {/* CERTIFICATION */}
      <button className="button" data-text="Project">
        <span className="">&nbsp;certification&nbsp;</span>
      </button>
      <Box my={2}>
        {certificationData.map((item) => {
          return (
            <div key={item.id} className="flex items-start my-3">
              <WorkspacePremium
                color="primary"
                fontSize="large"
                className="mx-2"
              />
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.describe}</Typography>
              </Box>
            </div>
          );
        })}
      </Box>
    </>
  );
}
