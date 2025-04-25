import { certificationData } from "@/data";
import {
  CalendarMonth,
  LocationOn,
  School,
  Speed,
  WorkspacePremium,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function EducationComponent() {
  return (
    <>
      <button className="button" data-text="Education">
        <span className="">&nbsp;education&nbsp;</span>
      </button>
      <Box m={2}>
        <p className="text-sm md:text-lg font-semibold">Software Engineering</p>
        <div className="flex my-2 items-start">
          <School fontSize="small" className="mr-2" />
          <p className="text-sm md:text-lg">FPT Academy International (FAI)</p>
        </div>
        <div className="flex my-2 items-start">
          <CalendarMonth fontSize="small" className="mr-2" />
          <p className="text-sm md:text-lg">10/2022 - 10/2024</p>
        </div>
        <div className="flex my-2 items-start">
          <LocationOn fontSize="small" className="mr-2" />
          <p className="text-sm md:text-lg">
            391A Nam Ky Khoi Nghia, Vo Thi Sau Ward, District 3, HCMC, Vietnam.
          </p>
        </div>
        <div className="flex my-2 items-start">
          <Speed fontSize="small" className="mr-2" />
          <p className="text-sm md:text-lg">GPA: 78/100</p>
        </div>
      </Box>

      {/* CERTIFICATION */}
      <button className="button" data-text="Project">
        <span className="">&nbsp;certification&nbsp;</span>
      </button>
      <div className="my-2">
        {certificationData.map((item) => {
          return (
            <div key={item.id} className="flex items-start my-3">
              <WorkspacePremium
                color="primary"
                fontSize="large"
                className="mx-2"
              />
              <div>
                <Link className="text-2xl" href={item.link}>
                  {item.title}
                </Link>
                <p className="text-sm md:text-lg py-1">{item.describe}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
