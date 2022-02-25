import {useContext, useEffect} from "react"
import {AuthContext} from "../contexts/AuthContext";
import { api } from "../services/apiClient";
import { withSSRAuth } from './../utils/withSSRAuth';
import { setupApiClient } from './../services/api';
import { AuthTokenError } from './../services/error/AuthTokenError';
import { destroyCookie } from 'nookies';
import { useCan } from "../hook/useCan";

export default function DashBoard(){
    const {user} = useContext(AuthContext)

    const userCanSeeMetrics = useCan ({
       roles: ['administrator','editor']
    });

    useEffect(()=>{
       api.get('/me').then(response => console.log(response))
        .catch(err => console.log(err));
    },[])

    return(
        <>
            <h1>Dashboard: {user?.email}</h1>
            
            {userCanSeeMetrics && <div>Métricas</div>}
        </>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx)=> {
    const apiClient = setupApiClient(ctx)
    
    const response = await apiClient.get('/me');
    

    return{
        props:{}
    }
})