export const checkEmail = ( email ) =>{
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    return regex.test(email)
}

export const checkGeneralData = (email, password , setErrorForm) =>{
    if(email==='' || password===''){
        setErrorForm({
            message:'Fields cannot be empty.'
        })
        return
    }
    if(!checkEmail(email)){
        setErrorForm({message:'Check email field.'})
        return
    }

    return true
}