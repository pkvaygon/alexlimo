"use client";
import React from "react";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

const DateComponent: React.FC = () => {
  return (
    <div className="p-4 gap-3 w-full flex justify-between items-start">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
             label={<span className="">Pick-up Date</span>} 
              className="w-full bg-white  text-white" 
               defaultValue={dayjs(new Date())}
               slotProps={{ 
                textField: { InputProps: { color: 'primary' },
               }}}
               />
            <TimePicker label={<span className="">Pick-up Time</span>} className="w-full  text-white" defaultValue={dayjs('2022-04-17T15:30')} />
      </LocalizationProvider>
    </div>
  );
};

export default DateComponent;
