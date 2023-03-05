import { useState } from "react";
import { DEFAULT_VALUES } from "components/enums/enums";

interface SelectProps{
    label:string;
    id:string;
    options:Array<string> | Array<number>| [];
    onChange: (value:string) => void ;
    defaultValue?: string;
}


const Select = (props: SelectProps) => {

    const [value, setValue] = useState('')

    return (    
        <>
            <label htmlFor={props.id}>{props.label}:</label>
            <select name={props.id} id={props.id} onChange={ e=> { props.onChange(e.target.value) ; setValue(e.target.value); } } value={value}  >
                { props.defaultValue === undefined? <option defaultValue={DEFAULT_VALUES.SELECT} value={DEFAULT_VALUES.SELECT}   >Select an option</option> : <></>}
                { props.options.map( (opt, index) => (<option key={index} value={opt}>{opt}</option>)) }
            </select>
        </>
        
    )

}

export default  Select;