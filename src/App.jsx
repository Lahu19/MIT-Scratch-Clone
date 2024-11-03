import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";
import { updateList } from "./redux/slice/midSlice";
import { store } from "./store";

function App() {
  const dispatch = useDispatch();

  // Function to set initial styles for the active sprite element
  const applyInitialSpriteStyles = () => {
    const activeElement = document.getElementById(`${store.getState().sprite.active}-div`);
    if (activeElement) {
      activeElement.style.position = "relative";
      activeElement.style.left = "0px";
      activeElement.style.top = "0px";
    }
  };

  // Apply initial sprite styles when the component mounts
  useEffect(() => {
    applyInitialSpriteStyles();
  }, []);

  // Handler function for drag end event in DragDropContext
  const handleDragEnd = (result) => {
    dispatch(updateList(result));
  };

  return (
    <div className="app-container bg-blue-100 font-sans">
      <div className="main-layout h-screen overflow-hidden flex flex-row pt-6">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="workspace flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea />
          </div>
          <div className="preview w-1/3 relative h-screen overflow-scroll flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
