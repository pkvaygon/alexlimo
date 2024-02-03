"use client";
import React from "react";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

const DateComponent: React.FC = () => {
  return (
    <div className="container flex justify-between items-start">
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'DatePicker',
            'TimePicker',
          ]}
        >
          <DemoItem  label="Pickup Date">
            <DatePicker  defaultValue={dayjs(new Date())} />
          </DemoItem>
          <DemoItem label="Pickup Time">
            <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default DateComponent;
