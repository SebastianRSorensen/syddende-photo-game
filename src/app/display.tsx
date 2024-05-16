"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Display({ shuffledArray }: { shuffledArray: any[] }) {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [reveal, setReveal] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (index > shuffledArray.length - 1) {
    return <div>End</div>;
  }

  const handleOnClick = () => {
    setIndex(index + 1);
    setReveal(true);
  };

  const handleOnReveal = () => {
    setReveal(false);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-5 p-10">
      <div className="flex flex-row justify-center">
        <Image
          src={shuffledArray[index].photo}
          className="object-cover rounded-lg shadow-lg"
          alt={`Photo ${index}`}
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-row justify-center gap-1  ">
        {reveal ? (
          <Button onClick={handleOnReveal}>Reveal</Button>
        ) : (
          <div className="flex flex-col gap-4">
            <Button onClick={handleOnClick}>Next</Button>
            <span className="text-2xl font-bold">
              {shuffledArray[index].owner}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
