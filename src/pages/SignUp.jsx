import FormsUp from "../Components/FormsUp"

function SignUp() {
    return (
        <div className="min-h-screen grid grid-cols-1 sm:grid-cols-[minmax(0px,1fr)_minmax(370px,1fr)_minmax(0px,1fr)]">
  
  
            <div className=" hidden sm:block bg-gray-800">
                
            </div>


            <div className="">
                <FormsUp/>
            </div>


            <div className=" hidden sm:block bg-gray-800">
                
            </div>

        </div>
    )
}

export default SignUp