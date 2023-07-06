import Form from "../../Components/Form/Form"
import girl from '../../assets/loginGirl.png'

export default function Login (){
    return(
        <main style={{backgroundColor:'#EAEAEA'}} className="w-screen h-screen flex flex-col justify-end items-center gap-5" >
           <Form />
           <div className='w-full h-2/6 flex justify-center items-start pl-6 pr-6 md:h-1/6 z-0'>
            <img className='bottom-0 z-0 drop-shadow-xl left-0 absolute sm:w-1/2' src={girl} alt="" />
            <span className='text-xl text-slate-600'>Keeps the inventories of the companies in a <span className='text-2xl font-semibold'>fast way.</span></span>
           </div>
        </main>
    )
}