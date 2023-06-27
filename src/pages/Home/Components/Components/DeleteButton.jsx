/* eslint-disable react/prop-types */
import { useState } from "react"
import Modal from "../../../../Components/Modal/Modal"
import deleteButton from '../../../../assets/deleteButton.svg'
import { useNavigate } from "react-router-dom"

export default function DeleteButton ({data, uri, width, setNewUpdate, newUpdate, token}){
    const [ isOpened, setIsOpened ] = useState(false)
    const [ error, setError ] = useState()
    const navigate = useNavigate()
    const handlerSubmit = async() =>{
        const dataToSend = {
            nit:data.NIT,
            idProduct:data._id||''
        }
        try {
            const response = await fetch(`${uri}`, {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                    'access-token':token
                },
                body:JSON.stringify(dataToSend)
            })
            if(!response.ok){
                const message = await response.json()
                setError(message)
                throw new Error
            }
            setNewUpdate(!newUpdate)
            setIsOpened(false)
            const resJson = await response.json()
            if(resJson.message==='product') return
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
            <button onClick={()=>setIsOpened(true)}>
                <img src={deleteButton} className="w-6" alt="" width={width} />
            </button>
            <Modal setError={setError} error={error} isOpened={isOpened} setIsOpened={setIsOpened} onSubmit={handlerSubmit} actionSubmit={"Yes"}>
                <span className="text-2xl">Are you sure delete <span className="font-bold">{data.name}</span>?</span>
            </Modal>
        </>
    )
}