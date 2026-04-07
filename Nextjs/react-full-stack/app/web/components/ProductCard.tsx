"use client"

import { useState } from "react"

export function ProductCard(props){
let [val,setVal]=useState(0);

    return <>
    <div>{props.p.id}</div>
    <div>{props.p.name}</div>
    </>

}