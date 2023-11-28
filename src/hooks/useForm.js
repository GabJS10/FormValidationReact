import { useState, useEffect } from 'react';
import MyFetch from "../helpers/fetchHook"
function useForm() {
    const [load,setLoad] = useState(false)
    const [succesfull,setSuccesfull] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!e.target.checkValidity()) return;
        const formData = new FormData(e.target)
        setLoad(true)
        MyFetch().post("https://formsubmit.co/ajax/jgabis65@gmail.com",{
            body:formData,
            mode:"cors"
        }).then(res => {
            setLoad(false)
            setSuccesfull({success:true,message:res.message})

            setTimeout(() => {
                setSuccesfull(null)
                e.target.reset()
            }, 3000);

        })

    }

    return {load,succesfull,handleSubmit};
}

export default useForm;