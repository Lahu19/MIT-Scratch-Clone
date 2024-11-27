import React from "react";
import { useDispatch, useSelector } from "react-redux";
import runAllEvents from "../redux/functions";
import { addList } from "../redux/slice/midSlice";
import { addCharacter } from "../redux/slice/spriteSlice";
import MidAreaElements from "./MidAreaElements";

// Button component for common styles and logic
const ActionButton = ({ label, onClick, isActive, icon: Icon, customClass }) => (
  <h1
    className={`font-poppins text-[1.1rem] font-semibold cursor-pointer flex items-center gap-2 p-2 rounded-md ${isActive ? "bg-green-500 text-white" : ""} ${customClass}`}
    onClick={onClick}
  >
    {label} {Icon && <Icon className="max-w-[20px] max-h-[20px]" />}
  </h1>
);

const MidArea = ({ add_list }) => {
  const dispatch = useDispatch();
  const midAreaList = useSelector((state) => state.mid.midAreaLists);
  const thisSpriteActive = useSelector((state) => state.sprite.thisSprite);
  const activeStackId = useSelector((state) => state.mid.active);

  // Function to handle the "Run All" button click
  function handleClick() {
    const activeItem = midAreaList.find((obj) => obj.id === activeStackId);
    console.log("activeItem:", activeItem);
    if (activeItem) {
      runAllEvents(activeItem);
    } else {
      console.error("No matching item found in midAreaList.");
    }
  }
  
  return (
    <div className="flex-1 h-[90vh] overflow-y-auto p-4 bg-gray-50 rounded-md">
      <div className="button-group flex flex-wrap gap-4 items-center mb-6">
      <h1 className="mt-4 header font-poppins text-2xl font-semibold mb-4 bg-green-500 p-3 border-gray-300 rounded-md text-white ">Mid Area</h1>
        <ActionButton
          label="Add Action List"
          onClick={() => dispatch(addList())}
          customClass="border-4 bg-blue border-teal-500"
        />
        <ActionButton
          label="Play"
          onClick={()=>handleClick()}
          customClass="border-4 border-teal-500"
        />
        <ActionButton
          label="Add Sprite"
          onClick={() => dispatch(addCharacter())}
          customClass="border-4 border-teal-500"
        />
        {/* <ActionButton
          label="When this Sprite is clicked"
          onClick={() => dispatch(toggleThisSprite())}
          customClass={`border-4 border-yellow-500 select-none ${thisSpriteActive ? "opacity-100" : "opacity-30"}`}
        /> */}
      </div>

      
        <MidAreaElements add_list={add_list} />
     </div>
  );
};

export default MidArea;
