import * as actions from '../actions/someactions'

export default function appMiddleware({ dispatch, getState}) {
    return (next) => {
        return (action) => {


          if (action.type === 'GO_TO'){
              var path = action.path;
              const isSecurePlace = (path === '/secure');
              const loggedIn = getState().data.user;

              if (path === '/login') //if user wants to login thats ok;
                 return next(action);

              if (isSecurePlace && !loggedIn){ //user did not login redirect
                  dispatch(actions.goTo('/login'));
                  return;
              }
              return next(action);
          }
            return (next(action));
        }
    }
}


