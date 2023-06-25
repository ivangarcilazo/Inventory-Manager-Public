/* eslint-disable react/prop-types */
import useFetch from '../../../hooks/useFetch'
import EditButton from './Components/EditButton'
import DeleteButton from './Components/DeleteButton'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ActionCompanies from './Components/ActionCompanies'
import AddButton from '../../../assets/AddButton.svg'


export default function CompaniesList({stateAuth}){
    const [ newUpdate, setNewUpdate ] = useState(false)
    const { data, loading, fetchData } = useFetch('http://localhost:3000/company', 'GET',null, stateAuth.token)

    useEffect(()=>{
        fetchData()
    }, [newUpdate])
    
    return(
        <div className="h-5/6 rounded-xl m-2">
            <div className="w-full rounded-t-xl h-1/6 flex items-center justify-around" style={{backgroundColor:'#ffa357'}}>
                <span className="text-xl">Companies</span>
                <ActionCompanies newUpdate={newUpdate} setNewUpdate={setNewUpdate} title={'Companies'} imageSource={AddButton} method={'POST'} modalTitle={'Add new company'} path={'register'} />
            </div>
            <div className="h-5/6 border- rounded-b-xl text-slate-600 border overflow-y-scroll bg-white">
                <table className="w-full">
                    <thead className="sticky top-0 bg-white ">
                        <tr className="">
                        <th className="py-2 px-4 border">Name:</th>
                        <th className="py-2 px-4 border">Address:</th>
                        <th className="py-2 px-4 border">NIT:</th>
                        <th className="py-2 px-4 border">Phone:</th>
                        <th className="py-2 px-4 border"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                        <tr>
                            <td colSpan="5" className="py-2 px-4 text-center">Loading</td>
                        </tr>
                        ) : (
                        data.map((data, index) => (
                            <tr key={index} className="pt-1 pb-1 ">
                            <td className="py-1 px-2 border break-words whitespace-normal text-sm">
                                <Link to={`/${data.NIT}`} className='underline'>
                                    {data.name}
                                </Link>
                            </td>
                            <td className="py-1 px-4 border text-sm">{data.address}</td>
                            <td className="py-2 px-4 border text-sm">{data.NIT}</td>
                            <td className="py-2 px-4 border text-sm">{data.phoneNumber}</td>
                            {
                            stateAuth.isAdmin&&
                            <td className="py-2 px-1 border text-sm">
                                <EditButton token={stateAuth.token} dataCompany={data}/>
                                <DeleteButton token={stateAuth.token} width={30} setNewUpdate={setNewUpdate} newUpdate={newUpdate}  data={data} />
                            </td>
                            }
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}