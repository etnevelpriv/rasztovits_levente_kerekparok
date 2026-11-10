import { useEffect, useState } from "react";
import { KerekparLista } from "./Components/KerekparLista/KerekparLista";
import type { Kerekpar_interface } from "./Models/Interfaces/Kerekpar.interface";
export const App = function () {
  const [kerekparok, setKerekparok] = useState<Kerekpar_interface[]>();
  useEffect(()=>{
    const loadData = async function () {
      try {
        const content = await fetch("kerekparok.json")
        const data:Kerekpar_interface[] = await content.json();
        setKerekparok(data);
      } catch (e:Error | any) {
        throw new Error(e);
      };
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Kiadó kerékpárok</h1>
      <KerekparLista></KerekparLista>
    </div>
  )
};