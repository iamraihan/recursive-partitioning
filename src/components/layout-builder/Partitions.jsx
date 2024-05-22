import { randomColor } from "@/utils";
import { useState } from "react";
import { ResizableBox } from "react-resizable";

const Partition = ({
  id,
  color,
  onSplit,
  onRemove,
  parentWidth,
  parentHeight,
}) => {
  const [split, setSplit] = useState(null);

  const handleSplit = (direction) => {
    setSplit(direction);
    onSplit(id, direction);
  };

  const renderContent = () => (
    <div
      className="absolute inset-0 flex items-center justify-center bg-opacity-75"
      style={{ backgroundColor: color }}
    >
      <button
        onClick={() => handleSplit("V")}
        className="px-2 py-1 m-1 bg-white text-black rounded"
      >
        V
      </button>
      <button
        onClick={() => handleSplit("H")}
        className="px-2 py-1 m-1 bg-white text-black rounded"
      >
        H
      </button>
      <button
        onClick={() => onRemove(id)}
        className="px-2 py-1 m-1 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  );

  if (split === "V") {
    return (
      <div className="flex w-full h-full">
        <Partition
          id={`${id}-1`}
          color={randomColor()}
          onSplit={onSplit}
          onRemove={onRemove}
          parentWidth={parentWidth / 2}
          parentHeight={parentHeight}
        />
        <Partition
          id={`${id}-2`}
          color={color}
          onSplit={onSplit}
          onRemove={onRemove}
          parentWidth={parentWidth / 2}
          parentHeight={parentHeight}
        />
      </div>
    );
  }

  if (split === "H") {
    return (
      <div className="flex flex-col w-full h-full">
        <Partition
          id={`${id}-1`}
          color={randomColor()}
          onSplit={onSplit}
          onRemove={onRemove}
          parentWidth={parentWidth}
          parentHeight={parentHeight / 2}
        />
        <Partition
          id={`${id}-2`}
          color={color}
          onSplit={onSplit}
          onRemove={onRemove}
          parentWidth={parentWidth}
          parentHeight={parentHeight / 2}
        />
      </div>
    );
  }

  return (
    <ResizableBox
      width={parentWidth}
      height={parentHeight}
      minConstraints={[100, 100]}
      maxConstraints={[parentWidth, parentHeight]}
      className="relative border"
    >
      {renderContent()}
    </ResizableBox>
  );
};

export default Partition;
