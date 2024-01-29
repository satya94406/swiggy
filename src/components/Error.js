import { useRouteError } from "react-router-dom";

const Error =()=>{
    const Err = useRouteError();
    
    return(
        <div>
            <h1>Ooops!!!</h1>
            <h2>Something went Wrong</h2>
            <h3> {Err.status}:{Err.statusText}</h3>
        </div>
    )
}

export default Error ;