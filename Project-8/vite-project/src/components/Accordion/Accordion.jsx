import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-x-[44px] gap-y-[20px] xl:justify-center">
      <Accordion className="w-[48%] h-max rounded-[20px] dark:bg-[gray] dark:text-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="">
                <p className=" font-[400] text-[18px] leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
                </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <p className="font-[400] text-[14px] leading-[22px] text-[#7A7A7A] dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation.
        </p>
          </Typography>

        </AccordionDetails>

      </Accordion>
      <Accordion className="w-[48%] h-max rounded-[20px] dark:bg-[gray] dark:text-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="">
                <p className=" font-[400] text-[18px] leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
                </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <p className="font-[400] text-[14px] leading-[22px] text-[#7A7A7A] dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation.
        </p>
          </Typography>

        </AccordionDetails>

      </Accordion>
      <Accordion className="w-[48%] h-max rounded-[20px] dark:bg-[gray] dark:text-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="">
                <p className=" font-[400] text-[18px] leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
                </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <p className="font-[400] text-[14px] leading-[22px] text-[#7A7A7A] dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation.
        </p>
          </Typography>

        </AccordionDetails>

      </Accordion>
      <Accordion className="w-[48%] h-max rounded-[20px] dark:bg-[gray] dark:text-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="">
                <p className=" font-[400] text-[18px] leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
                </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <p className="font-[400] text-[14px] leading-[22px] text-[#7A7A7A] dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation.
        </p>
          </Typography>

        </AccordionDetails>

      </Accordion>
    </div>
  );
}
