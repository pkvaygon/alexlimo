"use client";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/store/googleMapSlice";
import { RootState } from "@/types";
  
export default function SearchLocation() {
  const dispatch = useDispatch()
  const loca = useSelector((state: RootState)=> state.map.location)
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        componentRestrictions:{ country: 'us'}
      },
      debounce: 300,
    });
    const ref = useOnclickOutside(() => {
      // When the user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Update the keyword of the input element
      setValue(e.target.value);
    };
  
    const handleSelect =
      ({ description }: { description: string }) =>
      () => {
        // When the user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
  
        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0]);
          dispatch(setLocation({ lat, lng }))
          console.log('loca', loca)
        });
      };
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
          <li className="bg-blue-500 my-2 cursor-pointer text-black" key={place_id} onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
  
    return (
      <div ref={ref}>
        <input
        className="w-1/2 border-2"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    );
  };