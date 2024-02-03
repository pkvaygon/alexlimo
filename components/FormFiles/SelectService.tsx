"use client";
import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function SelectService() {
    return (
        <div className="px-[18px] w-full max-sm:mt-5 flex justify-center items-center">
        <Select
        isRequired
        radius="none"
        label="Service Detail"
        placeholder="Select service"
          className="w-full"
          variant="bordered"
        >
          <SelectItem key="from"  value="from">From Airport</SelectItem>
          <SelectItem key="to"  value="to">To Airport</SelectItem>
          <SelectItem key="point"  value="point">Point to point</SelectItem>
          <SelectItem key="hourly"  value="hourly">Hourly</SelectItem>
      </Select>
        </div>
        )
}