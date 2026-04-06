"use client"; //tagging as client component

import { useState } from "react"
export function Product(props){
    let [count,setCount]=useState(0);
return <>
        <tr>
        <td>{props.p.id}</td>
        <td>{props.p.name}</td>
         <td>{props.p.price}</td>
         <td>{props.p.description}</td>

        </tr>
    </>
}