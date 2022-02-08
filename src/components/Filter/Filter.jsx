import React from "react";
import s from "./Filter.module.css";


const Filter = ({value, onChange}) => (
    <>
    <p className={s.title}>Find contacts by name</p>
<input type="text" className={s.input}
value={value}
onChange={onChange}
/>
</>
)
 


export default Filter;
