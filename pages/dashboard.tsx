import {useContext, useEffect} from "react"
import {AuthContext} from "../contexts/AuthContext";
import { api } from "../services/apiClient";
import { withSSRAuth } from './../utils/withSSRAuth';
import { setupApiClient } from './../services/api';
import  {Can } from '../components/can';

export default function DashBoard(){
    const {user, signOut} = useContext(AuthContext);

    useEffect(()=>{
       api.get('/me').then(response => console.log(response))
        .catch(err => console.log(err));
    },[])

    return(
        <>
            <h1>Dashboard: {user?.email}</h1>
            <button onClick={signOut}>Sign out</button>
            <Can permissions={['metrics.list']}>
                <div>Métricas</div>
            </Can>
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