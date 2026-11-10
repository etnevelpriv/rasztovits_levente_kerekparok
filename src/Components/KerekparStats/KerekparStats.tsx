import { useState } from "react";
import type { Kerekpar_interface } from "../../Models/Interfaces/Kerekpar.interface";
import type { KerekparStats_prop } from "../../Models/Props/KerekparStats.prop";

export const KerekparStats = function (props: KerekparStats_prop) {
    const [cheapestKerekpar, setCheapestKerekpar] = useState<Kerekpar_interface>(props.kerekparok[0]);
    const [mostExpensiveKerekpar, setMostExpensiveKerekpar] = useState<Kerekpar_interface>(props.kerekparok[0]);
    
    props.kerekparok.forEach((kerekpar: Kerekpar_interface) => {
        console.log(kerekpar)
        if (kerekpar.napiDij < cheapestKerekpar.napiDij) {
            setCheapestKerekpar(kerekpar)
        };
        if (kerekpar.napiDij > mostExpensiveKerekpar.napiDij) {
            setMostExpensiveKerekpar(kerekpar)
        };

    });

    return (
        <>
            <ul>
                <li>
                    <strong>Kerekparok szama: </strong> {props.kerekparok.length}
                </li>
                <li>
                    <strong>Legolcsobb kerekpar berleti dija: </strong> {cheapestKerekpar.napiDij}
                </li>
                <li>
                    <strong>Legolcsobb kerekpar berleti dija: </strong> {mostExpensiveKerekpar.napiDij}
                </li>
            </ul>
        </>
    )
};