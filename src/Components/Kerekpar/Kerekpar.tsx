import { useState } from "react";
import type { Kerekpar_prop } from "../../Models/Props/Kerekpar.prop";

export const Kerekpar = function (prop: Kerekpar_prop) {
    const [detailVisibile, setDetailVisibility] = useState<boolean>(true);
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 style={{ color: prop.kerekpar.szin }} className="card-title">{prop.kerekpar.nev}</h3>
                    {detailVisibile && (
                        <ul>
                            <li>
                                <p className="card-text">Kerekpar tipusa: <em>{prop.kerekpar.tipus}</em></p>
                            </li>
                            <li>
                                <p className="card-text">Napi berleti dij: <u>{prop.kerekpar.napiDij.toString()}</u></p>
                            </li>
                        </ul>
                    )}
                    <button onClick={()=>
                        setDetailVisibility(!detailVisibile)
                    }>{detailVisibile ? "Elrejtés" : "Megjelenítés"}</button>
                </div>
            </div>

        </>
    )
};