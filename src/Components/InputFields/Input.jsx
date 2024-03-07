import React, { useId, useState } from 'react'

function Input({
    label,
    type,
    className = "",
    value,
    onChange,
    ...props
}) {
    const [inputValue,setInputValue]=useState(value || '');
    const id = useId();
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block my-2 text-lg font-noto font-semibold text-left text-slate-950'
                htmlFor={id}>
                {label}
            </label>}
            <input type={type}
            className={`outline-none w-full h-12 px-3 py-1 border-2 focus:border-slate-950 font-noto font-medium text-lg text-slate-950 rounded-md duration-200 ease-linear placeholder:font-medium bg-slate-200 placeholder:text-black placeholder:text-base ${className}`}
            id={id}
            required
            value={inputValue}
            onChange={handleInputChange}
            {...props}
             />
        </div>
    )
}

export default Input