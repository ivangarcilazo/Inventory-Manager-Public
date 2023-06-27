/* eslint-disable react/prop-types */
import ActionCompanies from './ActionCompanies'
import EditImage from '../../../../assets/editButton.svg'

export default function EditButton ({dataCompany, token, path, newUpdate, setNewUpdate}){
   return(
    <ActionCompanies newUpdate={newUpdate} setNewUpdate={setNewUpdate} path={path} token={token} method={'PUT'} data={dataCompany} imageSource={EditImage} modalTitle={`Edit company of ${dataCompany.name}`} />
   )
}