import React from "react";
import differentName from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  differentName(); // => "42 parks!"
  parkWildlife(); //=> Elk,BigHorn,Sheep and Moose
  console.log(parkTrees);
  console.log(RMFunctions.trees);
  RMFunctions.wildlife();
  RMFunctions.elevation();
  return (
    <div>
      <MesaVerde />
    </div>
  );
}
