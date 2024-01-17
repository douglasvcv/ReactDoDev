import { useEffect } from "react"
function UserLog(state){
    useEffect(logger, [state])
    function logger(){
        console.log("Entrou no useEffect", state)
    }
}
export default UserLog