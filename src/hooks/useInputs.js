import { useState, useEffect } from 'react';

function useInputs() {
    const [error,setError] = useState(null)

    const handleBlur = (e) => {
        if(!e.target.checkValidity()|| e.target.value.length > 255){
            let message = e.target.validationMessage || "No exceda los 255 caracteres"
            setError({...error,[e.target.name]:message})
        }else{
            setError(null)
        }
    }

    return {error,handleBlur};
}

export default useInputs;