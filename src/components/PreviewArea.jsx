import React from "react";
import { useSelector } from "react-redux";
import CatSprite from "./sprite";

function PreviewArea() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  let elmnt = null;

  function dragMouseDown(e, id) {
    elmnt = document.getElementById(id);

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  const character = useSelector((state) => state.sprite);

  // Sprite animation logic
  // const [spid0Left, setSpid0Left] = useState(100);
  // const [spid1Left, setSpid1Left] = useState(400);
  // const [spid0Steps, setSpid0Steps] = useState(10);
  // const [spid1Steps, setSpid1Steps] = useState(-10);
  // const [hasCollided, setHasCollided] = useState(false);

  // const spid0Ref = useRef(null);
  // const spid1Ref = useRef(null);

  // useEffect(() => {
  //   function moveSprites() {
  //     setSpid0Left((prevLeft) => prevLeft + spid0Steps);
  //     setSpid1Left((prevLeft) => prevLeft + spid1Steps);

  //     const spid0Rect = spid0Ref.current.getBoundingClientRect();
  //     const spid1Rect = spid1Ref.current.getBoundingClientRect();

  //     // Check for collision
  //     if (
  //       !hasCollided &&
  //       spid0Rect.right >= spid1Rect.left &&
  //       spid1Rect.right >= spid0Rect.left
  //     ) {
  //       // Swap directions
  //       setSpid0Steps(spid1Steps);
  //       setSpid1Steps(spid0Steps);
  //       setHasCollided(true);
  //     }

  //     // Separation logic: stop once they are 300 pixels apart
  //     if (hasCollided && Math.abs(spid0Left - spid1Left) > 300) {
  //       return; // Stops the animation
  //     }

  //     requestAnimationFrame(moveSprites);
  //   }

  //   // Start animation
  //   requestAnimationFrame(moveSprites);
  // }, [spid0Left, spid1Left, spid0Steps, spid1Steps, hasCollided]);

  return (
    <div
      className="w-full flex-none h-full overflow-y-auto p-3"
      id="preview_area"
    >
      <h1 className="header font-poppins text-2xl font-semibold bg-green-500 p-3 border-gray-300 rounded-md text-white">
        Preview Area
      </h1>
      <div className="flex justify-around h-full">
        {character.characters.map((x, i) => {
          return (
            <div
              id={`${x.id}-${i}`}
              key={i}
              className={`absolute`}
              onMouseDown={(e) => dragMouseDown(e, `${x.id}-${i}`)}
            >
              <div id={`${x.id}-div`} className="character">
                <div
                  className="hidden border-2 p-2 ml-3 mb-2 w-auto whitespace-nowrap"
                  id={x.id + "-message-box"}
                ></div>
                <div
                  className="hidden rounded-full border-2 w-4 left-1/2 h-4 ml-3 mb-2 whitespace-nowrap"
                  id={x.id + "-message-box1"}
                ></div>
                <CatSprite characId={x.id} />
              </div>
            </div>
          );
        })}
        {/* Sprites
        <div
          ref={spid0Ref}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'red',
            position: 'absolute',
            top: '100px',
            left: `${spid0Left}px`
          }}
        ></div>
        <div
          ref={spid1Ref}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'blue',
            position: 'absolute',
            top: '100px',
            left: `${spid1Left}px`
          }}
        ></div> */}
      </div>
    </div>
  );
}

export default PreviewArea;
