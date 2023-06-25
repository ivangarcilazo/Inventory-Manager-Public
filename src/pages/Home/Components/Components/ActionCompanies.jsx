/* eslint-disable react/prop-types */
import { useState, useRef } from "react"
import Modal from "../../../../Components/Modal/Modal"
import { generalCheckAddNewCompany } from "./utils/checkAddNewCompany"
import FormCompanies from "./FormCompanies"

//It has the functionality of check data and errors 
export default function ActionCompanies({data, imageSource, method, modalTitle, path, setNewUpdate, newUpdate, token}){

    const [ statusRequest, setStatusRequest ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ open, setOpen ] = useState(false)
    
    const nameCompanyRef = useRef(null)
    const addressCompanyRef = useRef(null)
    const NITCompanyRef = useRef(null)
    const phoneCompanyRef = useRef(null)

    const handlerSubmit = async(e) =>{
        e.preventDefault()
        const nameCompany = nameCompanyRef.current.value
        const addressCompany = addressCompanyRef.current.value
        const NITCompany = NITCompanyRef.current.value
        const phoneCompany = phoneCompanyRef.current.value
 
        if(!generalCheckAddNewCompany(nameCompany, addressCompany, NITCompany, phoneCompany, setError)) return
        setError(false)
        setStatusRequest(true)

        const data = {
            name:nameCompany,
            address:addressCompany,
            NIT:NITCompany,
            phone:phoneCompany
        }

        try {
            const response = await fetch(`http://localhost:3000/company/${path}`,{
                method:`${method}`,
                headers:{
                    'Content-Type':'application/json',
                    'Access-Token':token
                },
                body:JSON.stringify(data)
            })
            if(!response.ok){
                const message = await response.json()
                setError(message)
                setStatusRequest(false)
                throw new Error
            }
            setStatusRequest(false)
            setOpen(false)
            setNewUpdate(!newUpdate)
        } catch (error) {
            console.log(error)
        }
    }
    let dataCompany=[
        {
            label:'Company name:  ',
            ref:nameCompanyRef,
            placeholder:'Company name',
            value:data?.name
        },{
            label:'Company address:  ',
            ref:addressCompanyRef,
            placeholder:'Company address',
            value:data?.address
        },{
            label:'Company NIT:  ',
            ref:NITCompanyRef,
            placeholder:'Company NIT',
            value:data?.NIT
        },{
            label:'Company phone:  ',
            ref:phoneCompanyRef,
            placeholder:'Company phone',
            value:data?.phoneNumber
        },
    ]

    return(
        <>
            <button onClick={()=>setOpen(true)}>
                <img src={imageSource} className="w-6" alt="" />
            </button>
            {open&&(
                <Modal setError={setError} actionSubmit={'Submit'} onSubmit={handlerSubmit} isOpened={open} setIsOpened={setOpen} error={error} statusRequest={statusRequest} title={modalTitle}>
                    <FormCompanies dataCompany={dataCompany} onSubmit={handlerSubmit}/>
                </Modal>
            )}
        </>
    )
}