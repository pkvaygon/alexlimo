"use client";
import React from 'react';
import { RootState,VehicleProps } from '@/types';
import { MinusIcon, PlusIcon } from './../icons/';
import { useSelector, useDispatch } from 'react-redux';
import {chooseVehicle, incrementTravellers, decrementTravellers, incrementKids, decrementKids, incrementBags, decrementBags, clearLocation, clearLocationB } from '@/store/googleMapSlice'
import {Input,ButtonGroup,Card, CardFooter, Image,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { vehicles } from '@/utils';
import { CldImage } from 'next-cloudinary';
import {airports} from '@/utils'
export default function PeopleForm(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
const travellers = useSelector((state: RootState)=> state.map.results.travellers)
const bags = useSelector((state: RootState) => state.map.results.bags)
const res = useSelector((state: RootState)=> state.map.results) 
const reduxVehicle = useSelector((state: RootState)=> state.map.results.selectedVehicle)
const findAddress = airports.find((airport)=> airport.name === res.airportName)
const [vehicleSelected, setVehicleSelected] = React.useState(false)
    const dispatch = useDispatch();
function onVehicleSelected(vehicle : VehicleProps){
  dispatch(chooseVehicle(vehicle))
  setVehicleSelected(true)
}
function onCanceled(){
  setVehicleSelected(false)
  dispatch(clearLocation())
  dispatch(clearLocationB())
}
    const handleTravellersIncrement = () => {
        dispatch(incrementTravellers());
    };

    const handleTravellersDecrement = () => {
        dispatch(decrementTravellers());
    };

    const handleKidsIncrement = () => {
        dispatch(incrementKids());
    };

    const handleKidsDecrement = () => {
        dispatch(decrementKids());
    };

    const handleBagsIncrement = () => {
        dispatch(incrementBags());
    };

    const handleBagsDecrement = () => {
        dispatch(decrementBags());
    };
    type ScrollBehavior = "normal" | "inside" | "outside";
    const [scrollBehavior, setScrollBehavior] = React.useState<ScrollBehavior>('normal');

  React.useEffect(() => {
    const handleResize = () => {
      const newScrollBehavior = window.innerWidth <= 540 ? 'inside' : 'normal';
      setScrollBehavior(newScrollBehavior);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
return(
    <>
    <div className='flex flex-col gap-3 h-auto mb-10'>
    <section className='flex gap-3 flex-wrap h-auto '>
        <div className="max-lg:items-start flex-1 flex flex-col gap-3">
            <span>Passengers</span>
            <ButtonGroup radius="none" size="md" className="flex justify-stretch items-stretch w-full">
      <Button onClick={handleTravellersDecrement} isIconOnly><MinusIcon /></Button>
      <Button className="font-semibold leading-7 text-lg" isDisabled isIconOnly>{travellers}</Button>
      <Button onClick={handleTravellersIncrement} isIconOnly><PlusIcon /></Button>
    </ButtonGroup>
        </div>
        <div className="max-lg:items-start flex-1  flex flex-col gap-3">
            <span>Luggage</span>
            <ButtonGroup size="md" radius="none" className="flex justify-stretch items-stretch w-full">
      <Button onClick={handleBagsDecrement} isIconOnly><MinusIcon /></Button>
      <Button className="font-semibold leading-7 text-lg" isDisabled isIconOnly>{bags}</Button>
      <Button onClick={handleBagsIncrement} isIconOnly><PlusIcon /></Button>
    </ButtonGroup>
        </div>
    </section>
        <Button onPress={onOpen} className="bg-black lg:w-full  text-white mr-auto px-8" radius="none">
        Check Pricing
    </Button>   
</div>
 <Modal  scrollBehavior={scrollBehavior} size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Choose Vehicle Type</ModalHeader>
              <ModalBody className="h-auto py-6 grid grid-rows-auto overflow-auto  sm:grid-rows-1 sm:grid-cols-4 gap-3">
                
                {vehicleSelected !== true ?
                vehicles.map((el,index)=>(
                  <div className="col-span-1" key={index} onClick={()=> onVehicleSelected(el)} >
                    <Card    isFooterBlurred className=" hover:drop-shadow-xl w-full h-[300px]">
                    <CldImage
                        width="600"
                      height="600"
                      alt={el?.label}
                      src={el.image}
                      className="object-cover"
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                      <div className="flex flex-grow gap-2 items-center">
                        <div className="flex flex-col">
                                    <p className="text-tiny text-white">{el.name}</p>
                          <p className="text-tiny text-white">Passengers: {el.passengers} - Bags: {el.bags}</p>
                        </div>
                      </div>
                      <Button radius="full" size="sm">{el.price}$</Button>
                    </CardFooter>
                  </Card>
                  </div>
                    ))
                : (
                <section className=" col-span-full w-full gap-2 container max-sm:flex-col flex justify-between items-center">
                  <div className="max-sm:w-full w-1/2 h-full">
                    <div className="flex flex-col items-start ">
                      <p className="text-large">Trip Summary</p>
                    </div>
                    <div className="w-full">
                      <div className="w-full h-full">  
                        <Image className="w-2/5 h-full" src={reduxVehicle?.image} alt={reduxVehicle?.name}/>
                      <div>
                        {res?.serviceDetail === 'from' && <p>Pick-up From {res?.airportName}</p>}
                        {res?.serviceDetail === 'to' && <p>Drop-off to {res?.airportName}</p>}
                        {['from', 'to'].includes(res?.serviceDetail) && <p>Airport address: {findAddress?.address}</p>}
                        {res?.serviceDetail === 'from' && <p>Drop-off To {res?.dropoff}</p>}
                        {res?.serviceDetail === 'to' && <p>Pick-up from {res?.pickup}</p>}
                        {(res?.serviceDetail === 'point' || res?.serviceDetail === 'hourly') && <p>Pick-up From {res?.pickup}</p>}
                        {(res?.serviceDetail === 'point' || res?.serviceDetail === 'hourly') && <p>Drop-off To {res?.dropoff}</p>}
                        {res?.serviceDetail === 'hourly' && <p>Hours: {res.hours}</p>}
                        <p>Passengers: {res.travellers}</p>
                        <p>Luggage: {res.bags}</p>
                      </div>
                   </div>
                        </div>
                  </div>
                  <div className="max-sm:w-full w-1/2 h-full">
                <div className="w-full h-full">
      <div className="flex flex-col items-start ">
        <p className="text-large">Personal Info</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="Username" labelPlacement="outside" placeholder="Enter username" />
        <Input label="Email" labelPlacement="outside" placeholder="Enter email" />
        <Input label="First Name" labelPlacement="outside" placeholder="Enter first name" />
        <Input label="Last Name" labelPlacement="outside" placeholder="Enter last name" />
        <Input label="Phone Number" labelPlacement="outside" placeholder="Enter phone number" />
      </div>
    </div> 
                  </div>
    </section>
    )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={ vehicleSelected === false ? onClose : onCanceled}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
</>
    )
}