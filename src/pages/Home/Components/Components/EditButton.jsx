/* eslint-disable react/prop-types */
import ActionCompanies from "./ActionCompanies"
import EditImage from '../../../../assets/editButton.svg'

export default function EditButton ({dataCompany, token}){
   return(
    <ActionCompanies token={token} method={'PUT'} data={dataCompany} imageSource={EditImage} modalTitle={`Edit company of ${dataCompany.name}`} />
   )
}