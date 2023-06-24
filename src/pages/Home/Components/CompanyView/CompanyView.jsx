export default function CompanyView(){
    return(
        <div className="w-2/6 h-full bg-white flex items-center justify-center">

            <div className="h-4/5 w-full rounded-xl m-3">

                <div className="w-full rounded-t-xl h-1/6 flex items-center justify-around" style={{backgroundColor:'#ffa357'}}>
                    <span className="text-xl">Companies</span>
                    <button>Add</button>
                </div>
                <div className="h-5/6 bg-red-400 rounded-b-xl">

                </div>
                
            </div>
        </div>
    )
}