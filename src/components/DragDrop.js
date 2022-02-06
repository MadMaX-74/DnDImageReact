import React, { useState } from 'react';
import Picture from "./Picture";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?cs=srgb&dl=pexels-junior-teixeira-2047905.jpg&fm=jpg"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2603464.jpg&fm=jpg"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2098427.jpg&fm=jpg"
  },
]

function DragDrop() {
  const [board, setBoard] = useState([]);
  const [{isOver}, drop] = useDrop(()=> ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isPver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board,pictureList[0]]);
  }

    return (
        <>
        <div className="Pictures">
          {PictureList.map((picture) => {
            return <Picture url={picture.url} id={picture.id}/>
          })}
        </div>
        <div className="Board" ref={drop}>
          {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id}/>
          })}
        </div>
        </>
    )
}

export default DragDrop
