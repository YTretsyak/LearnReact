import { useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";

export function useDispatch(){
    const store = useContext(UserContext);
    return store.dispatch.bind(store);
}

export function useSelector(selector){
    const store = useContext(UserContext);
    const [value, setValue] = useState(()=>selector(store.state));

    useEffect(()=>{
        const callback = (state)=>{
            setValue(selector(state));
        };

        store.subscribe(callback);

        return ()=>{
            store.unsubscribe(callback);
        };}
    , [store, selector]);

    return value;
}