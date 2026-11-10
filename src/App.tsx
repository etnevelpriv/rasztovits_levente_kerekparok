import { useEffect, useState } from "react";
import { KerekparLista } from "./Components/KerekparLista/KerekparLista";
import type { Kerekpar_interface } from "./Models/Interfaces/Kerekpar.interface";
import { KerekparStats } from "./Components/KerekparStats/KerekparStats";
import "./App.css"
export const App = function () {
  const [kerekparok, setKerekparok] = useState<Kerekpar_interface[]>([]);
  const [betoltott, setBetoltott] = useState<boolean>(false);

  useEffect(() => {
    console.log("fut")
    const loadData = async function () {
      try {
        const content = await fetch("kerekparok.json")
        const data: Kerekpar_interface[] = await content.json();
        setKerekparok(data);
        setBetoltott(true)
      } catch (e: Error | any) {
        throw new Error(e);
      };
    };
    loadData();
  }, []);

  if (betoltott) {
    return (
      <div className="container">
        <h1>Kiadó kerékpárok</h1>
        <KerekparStats kerekparok={kerekparok}></KerekparStats>
        <KerekparLista kerekparok={kerekparok}></KerekparLista>
      </div>
    )
  } else {
    return (
      <div className="container">
        <h1>Meg tolt az oldal</h1>
      </div>
    )
  }
};