import { skillData } from "@/data";
import { CheckCircleOutline } from "@mui/icons-material";

export default function TechnicalSkillComponent() {
  return (
    <div className="z-0">
      <button className="button" data-text="">
        <span className="">&nbsp;technical skills&nbsp;</span>
      </button>
      <div>
        {skillData.map((skill) => {
          return (
            <div key={skill.id} className="my-5 flex items-start">
              <CheckCircleOutline
                color="success"
                fontSize="medium"
                className="mx-2"
              />
              <div>
                <p className="text-sm md:text-lg capitalize font-semibold">
                  {skill.title}
                </p>
                <p className="text-sm md:text-lg pr-5">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
