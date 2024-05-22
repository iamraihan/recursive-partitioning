import { randomColor } from "@/utils";
import { useState } from "react";
import Partition from "@/components/layout-builder/Partitions";

const LayoutBuilder = () => {
  const [partitions, setPartitions] = useState([
    {
      id: "root",
      color: randomColor(),
      parentWidth: window.innerWidth,
      parentHeight: window.innerHeight,
    },
  ]);

  const handleSplit = (id, direction) => {
    setPartitions((prev) => {
      const newPartitions = [...prev];
      const index = newPartitions.findIndex((part) => part.id === id);
      const color = newPartitions[index].color;
      const { parentWidth, parentHeight } = newPartitions[index];
      newPartitions.splice(
        index,
        1,
        {
          id: `${id}-1`,
          color: randomColor(),
          parentWidth: direction === "V" ? parentWidth / 2 : parentWidth,
          parentHeight: direction === "H" ? parentHeight / 2 : parentHeight,
        },
        {
          id: `${id}-2`,
          color,
          parentWidth: direction === "V" ? parentWidth / 2 : parentWidth,
          parentHeight: direction === "H" ? parentHeight / 2 : parentHeight,
        }
      );
      return newPartitions;
    });
  };

  const handleRemove = (id) => {
    setPartitions((prev) => prev.filter((part) => part.id !== id));
  };

  return (
    <div className="w-full h-full bg-gray-200">
      {partitions.map((partition) => (
        <Partition
          key={partition.id}
          id={partition.id}
          color={partition.color}
          parentWidth={partition.parentWidth}
          parentHeight={partition.parentHeight}
          onSplit={handleSplit}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default LayoutBuilder;
