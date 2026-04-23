import Apresentation from "../Components/login/Apresentation"
import FormsIn from "../Components/login/FormsIn"

function Login() {
    return(
        <div className="flex h-screen">
            <div className=" transition-all duration-500 ease-in-out w-0 md:w-2/3 opacity-0 md:opacity-100 -translate-x-full md:translate-x-0">
                <Apresentation/>
            </div>
            <div className="flex-1">
                <FormsIn/>
            </div>
        </div>
    )
}


export default Login