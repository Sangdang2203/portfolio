import { Experience, Project } from "@/app/libs/types";
import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

interface Props {
  data: Experience[] | Project[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const CarouselComponent = ({ data, currentIndex, setCurrentIndex }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center">
        {data.map((_, index) => (
          <FiberManualRecord
            onClick={() => setCurrentIndex(index)}
            key={index}
            fontSize="small"
            className={`${
              currentIndex === index
                ? "text-green-700 cursor-pointer"
                : "text-green-200 cursor-pointer"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselComponent;
