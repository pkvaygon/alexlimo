"use client";
import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { chooseServiceDetail } from '@/store/googleMapSlice'

export default function SelectService() {
  const serviceDetail = useSelector((state)=> state.map.results.serviceDetail)
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = React.useState(() => [serviceDetail]);
React.useEffect(()=>{
  const selectedKeyArray = Array.from(selectedKey);
const key = selectedKeyArray[0];
  if (key === undefined) {
  alert('Choose Service')
} else {
  console.log('redux', serviceDetail)
  dispatch(chooseServiceDetail(key));
}
},[selectedKey,dispatch, serviceDetail])
    return (
        <div className="px-[18px] w-full max-sm:mt-5 flex justify-center items-center">
        <Select
          isRequired
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          selectionMode="single"
        radius="none"
        label="Service Detail"
        placeholder="Select service"
          className="w-full"
          variant="bordered"
        >
          <SelectItem isDisabled={serviceDetail === "from" ? true : false} key="from"  value="from">From Airport</SelectItem>
          <SelectItem isDisabled={serviceDetail === "to" ? true : false} key="to"  value="to">To Airport</SelectItem>
          <SelectItem isDisabled={serviceDetail === "point" ? true : false} key="point"  value="point">Point to point</SelectItem>
          <SelectItem isDisabled={serviceDetail === "hourly" ? true : false} key="hourly"  value="hourly">Hourly</SelectItem>
      </Select>
      
        </div>
        )
}