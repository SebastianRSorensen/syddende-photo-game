import Image from "next/image";
import data from "../../db.json";
import { use, useEffect, useState } from "react";
import { shuffle } from "./shuffle";
import { Display } from "./display";

export default function Home() {
  const shuffled = shuffle(data.photos_and_owners);
  return <Display shuffledArray={shuffled} />;
}
