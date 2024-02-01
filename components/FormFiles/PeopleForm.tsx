"use client";
import { RootState } from '@/types';
import { MinusIcon, PlusIcon } from './../icons/';
import {Button} from "@nextui-org/react";
import { useSelector, useDispatch } from 'react-redux';
import { incrementTravellers, decrementTravellers, incrementKids, decrementKids, incrementBags, decrementBags } from '@/store/googleMapSlice'
export default function PeopleForm(){
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
return(
    <div className='flex flex-col gap-3'>
    <section className='flex gap-3 max-sm:flex-col'>
        <div className=" sm:flex-1 flex flex-col gap-3">
            <span>Travellers</span>
            <div className="bg-[#F5F5F5] p-3 flex justify-between items-center">
                <button onClick={handleTravellersDecrement}>
                    <MinusIcon />
                </button>
                <span className="font-semibold leading-7 text-lg">{travellers}</span>
                <button onClick={handleTravellersIncrement}>
                    <PlusIcon />
                </button>
            </div>
        </div>
        <div className=" sm:flex-1 flex flex-col gap-3">
            <span>Kids</span>
            <div className="bg-[#F5F5F5] p-3 flex justify-between items-center">
                <button onClick={handleKidsDecrement}>
                    <MinusIcon />
                </button>
                <span className="font-semibold leading-7 text-lg">{kids}</span>
                <button onClick={handleKidsIncrement}>
                    <PlusIcon />
                </button>
            </div>
        </div>
        <div className=" sm:flex-1 flex flex-col gap-3">
            <span>Bags</span>
            <div className="bg-[#F5F5F5] p-3 flex justify-between items-center">
                <button onClick={handleBagsDecrement}>
                    <MinusIcon />
                </button>
                <span className="font-semibold leading-7 text-lg">{bags}</span>
                <button onClick={handleBagsIncrement}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    </section>
    <Button className="bg-black text-white ml-auto px-6" radius="none">
        Confirm
    </Button>
</div>
    )
}