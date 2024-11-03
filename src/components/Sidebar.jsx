import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { fetchComponent } from "./fetchComponents";

const Sidebar = () => {
  // Define different component categories for the Sidebar
  const motionComponents = [
    "MOVEX_TEN", 
    "MOVEY_TEN", 
    "CLOCKWISE_TEN", 
    "ANTICLOCKWISE_TEN",
    "REPEATE",
    "GOTO_XY",
  ];
  
  const looksComponents = [
    "SAY_TEN", 
  ];

  return (
    <div className="sidebar-container w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <h1 className="header font-poppins text-2xl font-semibold mb-4 bg-green-500 p-3 border-gray-300 rounded-md text-white ">Sidebar</h1>
      {/* Render Motion Components */}
      <section>
        <h2 className="section-title font-poppins text-xl font-semibold">Motion</h2>
        <Droppable droppableId="motionComponents" type="COMPONENTS">
          {(provided) => (
            <ul
              className="component-list flex flex-col gap-0.5 items-center"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {motionComponents.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="draggable-item w-[200px]"
                    >
                      {fetchComponent(item)}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </section>

      {/* Render Looks Components */}
      <section>
        <h2 className="section-title font-poppins text-xl font-semibold mt-3">Looks</h2>
        <Droppable droppableId="looksComponents" type="COMPONENTS">
          {(provided) => (
            <ul
              className="component-list flex flex-col gap-0.5 items-center my-0"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {looksComponents.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="draggable-item w-[200px]"
                    >
                      {fetchComponent(item)}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </section>
    </div>
  );
};

export default Sidebar;
