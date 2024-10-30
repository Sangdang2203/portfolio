import Link from "next/link";
import "../footer/footer.css";
import { IconTwister } from "@/assets/icons/IconTwister";
import { IconLinkedIn } from "@/assets/icons/IconLinkedIn";
import { IconWhatsApp } from "@/assets/icons/IconWhatsApp";
import { IconGithub } from "@/assets/icons/IconGithub";
import { Tooltip } from "@mui/material";

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

        <Tooltip title="WhatsApp">
          <Link
            className="socialContainer containerFour"
            href="https://web.whatsapp.com/"
            target="_blank"
          >
            <IconWhatsApp />
          </Link>
        </Tooltip>
      </div>
    </>
  );
}
