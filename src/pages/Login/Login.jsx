import Form from "../../Components/Form/Form"

export default function Login (){
    return(
        <main style={{backgroundColor:'#FFA357'}} className="w-screen h-screen flex flex-col justify-center items-center" >
           <Form /> 
            <div className="flex items-start justify-center"> 
                <div className="bg-slate-100 rounded w-4/6 mt-5">
                    <img src="https://uploads-ssl.webflow.com/5ef9e7820240534a394d4b30/634dad4b9b56535c1555419b_Logo%20Imagine.webp" alt="" />
                </div>
            </div>
        </main>
    )
}