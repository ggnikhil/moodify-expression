import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login,register } from "../services/auth.api";

export const useAuth = ()=>{
    const DataContext = useContext(AuthContext)

    const {user,setuser,loading,setloading} = DataContext

    const handleRegister = async (username,email,password,bio)=>{

        setloading(true)

        try{
            const response = await register(username,email,password,bio)
            setuser(response.user)
        }catch(err){
            console.log(err)
            throw err
        }finally{
            setloading(false)
        }
    }

    const handleLogin = async (email,password)=>{
        setloading(true)

        try{
            const response = await login(email,password)
            setuser(response.user)
        }catch(err){
            console.log(err)
        }finally{
           setloading(false) 
        }
    }

    return {user, loading, handleRegister, handleLogin}
}