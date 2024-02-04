"use client";
import React from 'react';
import { RootState } from '@/types';
import { MinusIcon, PlusIcon } from './../icons/';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTravellers, decrementTravellers, incrementKids, decrementKids, incrementBags, decrementBags } from '@/store/googleMapSlice'
import {ButtonGroup,Card, CardHeader, CardBody, CardFooter, Image,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { vehicles } from '@/utils';
import { CldImage } from 'next-cloudinary';

export default function PeopleForm(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
const travellers = useSelector((state: RootState)=> state.map.results.travellers)
const kids = useSelector((state: RootState)=> state.map.results.kids) 
    const bags = useSelector((state: RootState) => state.map.results.bags)
    const dispatch = useDispatch();

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
        {/* <div className="max-lg:items-start flex-1  flex flex-col gap-3">
            <span>Kids</span>
            <ButtonGroup radius="none" size="md" className="flex justify-stretch items-stretch w-full">
      <Button onClick={handleKidsDecrement} isIconOnly><MinusIcon /></Button>
      <Button className="font-semibold leading-7 text-lg" isDisabled isIconOnly>{kids}</Button>
      <Button onClick={handleKidsIncrement} isIconOnly><PlusIcon /></Button>
    </ButtonGroup>
        </div> */}
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
<Modal scrollBehavior={scrollBehavior} size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Choose Vehicle Type</ModalHeader>
              <ModalBody className="h-auto py-6 grid  sm:grid-rows-1 sm:grid-cols-4 gap-3">
                {
                vehicles.map((el,index)=>(
                    <Card key={index} isFooterBlurred className="w-full h-[300px]">
                    {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
                      <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                      <h4 className="text-white/90 font-medium text-xl">{el.name}</h4>
                    </CardHeader> */}
                    <CldImage
                        width="600"
                      height="600"
                      alt={el.label}
                      src={el.image}
        />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                      <div className="flex flex-grow gap-2 items-center">
                        <Image
                          alt="Breathing app icon"
                          className="rounded-full w-10 h-11 bg-black object-center"
                          src="/images/breathing-app-icon.jpeg"
                        />
                        <div className="flex flex-col">
                                    <p className="text-tiny text-white">{el.name}</p>
                          <p className="text-tiny text-white">Passengers: {el.passengers} - Bags: {el.bags}</p>
                        </div>
                      </div>
                      <Button radius="full" size="sm">{el.price}$</Button>
                    </CardFooter>
                  </Card>
                    ))
                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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