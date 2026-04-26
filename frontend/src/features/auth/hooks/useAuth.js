import { login,register,logout,getMe } from "../services/auth.api";
import {AuthContext} from "../Auth.context"
import { useContext,useEffect } from "react";

export const useAuth = ()=>{
    const AuthDataContext = useContext(AuthContext)

    const {user,setuser,loading,setloading} = AuthDataContext

    async function handleRegister({username,password,email}){
        setloading(true)
        const data = await register({username,password,email})
        setuser(data.user)
        setloading(false)
    }

    async function handleLogin({email,password}){
        setloading(true)
        const data = await login({email,password})
        setuser(data.user)
        setloading(false)
    }

    async function handleGetMe(){
        setloading(true)
        const data = await getMe()
        setuser(data.user)
        setloading(false)
    }

    async function handleLogout(){
        setloading(true)
        const data = await logout()
        setuser(null)
        setloading(false)
    }

    useEffect(()=>{
        handleGetMe()
    },[])

    return{
        user,loading,handleRegister,handleLogin,handleGetMe,handleLogout
    }
}