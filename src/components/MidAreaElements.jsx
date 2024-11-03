import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setActiveList } from "../redux/slice/midSlice";
import { store } from "../store";
import { fetchComponent } from "./fetchComponents";

// Individual Draggable Item Component
const DraggableItem = ({ component, listId, index }) => {
  const componentKey = `component-${component}-${listId}-${index}`;
  return (
    <Draggable key={componentKey} draggableId={componentKey} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="draggable-item mx-auto p-2 rounded-md border border-gray-300 shadow-sm"
        >
          {fetchComponent(component, componentKey)}
          {provided.placeholder}
        </li>
      )}
    </Draggable>
  );
};

// Droppable List Component for better modularization
const DroppableComponentList = ({ listData }) => {
  const dispatch = useDispatch();

  return (
    <Droppable droppableId={listData.id} type="COMPONENTS">
      {(provided) => (
        <ul
          className={`droppable-container w-[250px] min-h-[60px] flex flex-col bg-lime-100 rounded-md ${
            store.getState().mid.active === listData.id && "border-2 border-orange-500"
          }`}
          {...provided.droppableProps}
          ref={provided.innerRef}
          onClick={() => dispatch(setActiveList(listData.id))}
        >
          {listData.comps &&
            listData.comps.map((component, index) => (
              <DraggableItem
                key={`${component}-${listData.id}-${index}`}
                component={component}
                listId={listData.id}
                index={index}
              />
            ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

// Main Component Area
const ComponentArea = () => {
  const componentLists = useSelector((state) => state.mid);

  return (
    <div className="component-area flex flex-wrap gap-4 justify-center items-center h-full w-full bg-gray-50 p-4 rounded-md">
      {componentLists.midAreaLists.map((listData) => (
        <DroppableComponentList key={listData.id} listData={listData} />
      ))}
    </div>
  );
};

export default ComponentArea;
