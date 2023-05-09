import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion2() {
  return (
    <div>
      <Accordion className='p-[27px] rounded-[20px] dark:bg-[gray] dark:text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='rounded-[20px]'
        >
          <Typography className='font-[400] text-[18px] leading-[26px]'>Бакалавриат</Typography>
        </AccordionSummary>
        <AccordionDetails className=' rounded-[20px]'>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='p-[27px] rounded-[20px] dark:bg-[gray] dark:text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='rounded-[20px]'
        >
          <Typography className='font-[400] text-[18px] leading-[26px]'>Магистратура</Typography>
        </AccordionSummary>
        <AccordionDetails className='flex items-center justify-between rounded-[20px] md585:flex-wrap md585:justify-center'>
        <ul className='font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px] '>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
        </ul>

        <ul className='font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px] '>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
        </ul>

        <ul className='font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px] '>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
        </ul>

        <ul className='font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px] '>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
        </ul>

        <ul className='font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px] '>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
            <li>Архитектура</li>
        </ul>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}