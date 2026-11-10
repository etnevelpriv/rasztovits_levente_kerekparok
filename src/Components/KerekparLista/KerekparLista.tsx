import type { Kerekpar_interface } from "../../Models/Interfaces/Kerekpar.interface";
import type { KerekparLista_prop } from "../../Models/Props/KerekparLista.prop";
import { Kerekpar } from "../Kerekpar/Kerekpar";
import "./KerekparLista.css"

export const KerekparLista = function (props:KerekparLista_prop) {
    return (
        <div className="card-container">
            {props.kerekparok.map((kerekpar:Kerekpar_interface)=>(
                <Kerekpar key={kerekpar.id} kerekpar={kerekpar}></Kerekpar>
            ))}
        </div>
    )
};