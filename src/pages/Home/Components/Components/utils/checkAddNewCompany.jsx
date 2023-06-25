export const checkPhoneNumer = ( number ) =>{
    const regex = /^(\+[1-9]\d{0,2})?\d{3,14}$/
    
    return regex.test(number)
}

export const generalCheckAddNewCompany = (nameCompany, addressCompany, NITCompany, phoneCompany, setError) =>{
    if(nameCompany==='' || addressCompany==='' || NITCompany==='' || phoneCompany === ''){
        setError({
            message:'Fields can`t be empty.'
        })
        return
    }
    if(!checkPhoneNumer(phoneCompany)){
        setError({
            message:'Phone number invalid',
        })
        return
    }
    
    return true
}