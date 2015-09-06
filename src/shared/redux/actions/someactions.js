import {universalSuperagent} from '../../utils/universal-superagent.js';
var usa = new universalSuperagent();

export function setUser (user){
    return {
        type:'SET_USER',
        user
    }
}

export function goTo (path){
    return {
        type:'GO_TO',
        path
    }
}



export function login(username,password){
    return (dispatch,getState)=>{
        dispatch({
            type:'USER_LOGIN',
            payload: usa.post('/api/login',{data:{username,password}}).then((data)=>{
                    dispatch(setUser(data.name));
                    dispatch({
                        type:'GO_TO',
                        path:'/secure'
                    });
            })
        });

    };
}


