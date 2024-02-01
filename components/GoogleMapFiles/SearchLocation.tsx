"use client";
import React from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { setLocation,setLocationB,clearLocation,clearLocationB } from "@/store/googleMapSlice";
import { RootState } from "@/types";
import {Input} from "@nextui-org/react";
export default function SearchLocation() {
  const dispatch = useDispatch();
  const loca = useSelector((state: RootState) => state.map.location);
  const locaB = useSelector((state: RootState) => state.map.locationB);
  
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'us' },
    },
    debounce: 300,
  });

  const {
    value: valueB,
    suggestions: { status: statusB, data: dataB },
    setValue: setValueB,
    clearSuggestions: clearSuggestionsB,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'us' },
    },
    debounce: 300,
  });
  React.useEffect(() => {
    setValue(loca ? loca.address : ''); 
    setValueB(locaB ? locaB.address : '');
  }, [loca, locaB,setValue,setValueB]);

  const ref = useOnclickOutside(() => {
    clearSuggestions();
    clearSuggestionsB();
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || '');
  };

  const handleInputB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueB(e.target.value || '');
  };

  const handleSelect = ({ description }: { description: string }) => () => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      const formatted_address = results[0]?.formatted_address || '';
      dispatch(setLocation({ lat, lng, address: formatted_address }));
    });
  };

  const handleSelectB = ({ description }: { description: string }) => () => {
    setValueB(description, false);
    clearSuggestionsB();

    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      const formatted_address = results[0]?.formatted_address || '';
      dispatch(setLocationB({ lat, lng, address: formatted_address }));
      console.log('locaB', locaB)
    });
  };

  function clearInput() {
     setValue('')
     dispatch(clearLocation())
  }
  function clearInputB() {
    setValueB('')
    dispatch(clearLocationB())
  }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className="bg-blue-500 my-2 cursor-pointer text-black"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  const renderSuggestionsB = () =>
    dataB.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className="bg-blue-500 my-2 cursor-pointer text-black"
          key={place_id}
          onClick={handleSelectB(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className="p-4 flex justify-between items-start">
      <div className="w-1/2">
      <Input
        type="text"
        variant="bordered"
        label="Pick-up"
        isClearable
        value={value || ''}
        onChange={handleInput}
        onClear={() => clearInput()}
        disabled={!ready}
        placeholder="Enter pickup address"
      />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
      </div>
<div className="w-1/2">
        <Input
          type="text"
      onClear={() => clearInputB()}
        variant="bordered"
        label="Drop-off"
        isClearable
        value={valueB ||''}
        onChange={handleInputB}
        disabled={!ready}
        placeholder="Enter drop-off address"
      />
      {statusB === 'OK' && <ul>{renderSuggestionsB()}</ul>}
</div>
    </div>
  );
};