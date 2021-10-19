import notify from "./Notify";


export const ExceptionHandler= (error:any)=>{
    if (error.response) {
        if(error.response.data.description)
        {
            notify.error(error.response.data.description);
        }
        else if(error.response.status===403) {
            notify.error("Login time expired")
        }
        else {
            notify.error("Unexpected error")
        }
    }
    else {
        notify.error("Error: no response from the server")
    }
    // }else{
    //     notify.error('Error')
    // }
}