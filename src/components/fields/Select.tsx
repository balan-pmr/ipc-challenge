import { useEffect, useState } from "react";

interface SelectProps{
    label:string;
    id:string;
    options:Array<string> | Array<number>| [];
    onChange: any;
}


const Select = (props: SelectProps) => {

    const [value, setValue] = useState('')
    const [defaultValue, setDefaultValue] = useState('')

    useEffect(()=>{
            if(props.options.length === 1){
                setDefaultValue(props.options[0]+'')
            }
    }, [props,setDefaultValue])

    return (
        <>
            <label htmlFor={props.id}>{props.label}:</label>
            <select name={props.id} id={props.id} onChange={ e=> { props.onChange(e.target.value) ; setValue(e.target.value); } } value={value}  >
                { defaultValue === '' &&  <option defaultValue={defaultValue} >Select an option</option> }
                { props.options.map( (opt, index) => (<option key={index} value={opt}>{opt}</option>)) }
            </select>
        </>
    )

}

export default  Select;