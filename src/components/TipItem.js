import React from "react";

export default function TipItem({checked,onToggle,tip}){
    return(
        <li>
            <label>
                <input type="checkbox" checked={checked} onChange={onToggle}/>
                {tip}
            </label>
        </li>
    )
}