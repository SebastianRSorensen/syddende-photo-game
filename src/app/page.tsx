import {shuffle} from "./shuffle";
import {Display} from "./display";
import * as fs from "node:fs";

export default function Home() {
    const imgs: any[] = []
    fs.readdirSync("/home/martin/Documents/Personal/photo-game/public/imgs").forEach((name) => {
        fs.readdirSync("/home/martin/Documents/Personal/photo-game/public/imgs/" + name).forEach((file) => {
            imgs.push({owner: name, uri: `/imgs/${name}/${file}`});
        });
    });
    const shuffled = shuffle(imgs);
    return <Display shuffledArray={shuffled}/>;
}
