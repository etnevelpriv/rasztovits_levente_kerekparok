import type { Kerekpar_prop } from "../../Models/Props/Kerekpar.prop";

export const Kerekpar = function (prop: Kerekpar_prop) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 style={{color:prop.kerekpar.szin}} className="card-title">{prop.kerekpar.nev}</h3>
                    <ul>
                        <li>
                            <p className="card-text">Kerekpar tipusa: <em>{prop.kerekpar.tipus}</em></p>
                        </li>
                        <li>
                            <p className="card-text">Napi berleti dij: <u>{prop.kerekpar.napiDij.toString()}</u></p>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
};