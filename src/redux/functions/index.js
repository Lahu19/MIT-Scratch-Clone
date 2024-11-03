import functionMap from "./functionMap";
// Function also called as the runAllEvents()
const runEvents = async (midAreaList) => {
  for (let i = 0; i < midAreaList.length; i++) {
    const event = midAreaList[i];
    const motionFunction = functionMap[event];
  
    if (motionFunction) {
      console.warn(functionMap, midAreaList[i])
    } else {
      console.warn(`Motion function not found for event: ${event}`);
    }
  }
};

export default runEvents;
