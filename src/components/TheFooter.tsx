import Link from "next/link";
import "../assets/styles/footer.css";
import { Tooltip } from "@mui/material";
import { IconGithub } from "@/assets/icons/IconGithub";
import { IconTwister } from "@/assets/icons/IconTwister";
import { IconLinkedIn } from "@/assets/icons/IconLinkedIn";
import { IconWhatsApp } from "@/assets/icons/IconWhatsApp";

export default function FooterComponent() {
  return (
    <>
      <div className="card">
        <Tooltip title="Github">
          <Link
            className="socialContainer containerOne"
            href="https://github.com/Sangdang2203"
            target="_blank"
          >
            <IconGithub />
          </Link>
        </Tooltip>

        <Tooltip title="Twister">
          <Link
            className="socialContainer containerTwo"
            href="#"
            target="_blank"
          >
            <IconTwister />
          </Link>
        </Tooltip>

        <Tooltip title="LinkeIn">
          <Link
            className="socialContainer containerThree"
            href="https://www.linkedin.com/in/dang-van-sang/"
            target="_blank"
          >
            <IconLinkedIn />
          </Link>
        </Tooltip>

        <Tooltip title="Call">
          <Link className="socialContainer containerFour" href="tel:0909751772">
            <IconWhatsApp />
          </Link>
        </Tooltip>
      </div>
    </>
  );
}
