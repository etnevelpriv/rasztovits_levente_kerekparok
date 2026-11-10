import { useEffect } from "react";
import { KerekparLista } from "./Components/KerekparLista/KerekparLista";
export const App = function () {

  useEffect(()=>{
    const loadData = async function () {
      try {
        const content = await fetch("kerekparok.json")
        const data = await content.json();
        console.log(data);
      } catch (e:Error | any) {
        throw new Error(e);
      };
    };
    loadData();
  });
  return (
    <div className="container">
      <h1>Kiadó kerékpárok</h1>
      <KerekparLista></KerekparLista>
    </div>
  )
};