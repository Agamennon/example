# Example

npm install

npm run start

This is a striped down version of an example project for react-tiny-router
for simplicity all things releated to react-tiny-router where removed! 
this exemple was the simplest i could make that reproduces the issue
 
#### The app
 
the app uses only 3 action creators: `./src/shared/redux/actions/someactions.js`
 
`setUser` -> reduces to data.user
 
`goTo` -> reduces to data.path, with whatever path was passed in to this action creator

`login` -> calls database, on success sets the user on state with `setUser`, and calls `goTo('/secure')` 

App.jsx @ `./src/shared/components/App.jsx` will just return a component based on state.data.path

``` javascript
export default class App extends React.Component {
    render() {
        const path = this.props.data.path;
        if (path === '/secure')
            return <Secure/>;
        if (path === '/login')
            return <Login/>;
        return <Home/>
    }
}

```

#### The middleware

if data.user is not set and the path is to '/secure' set path to '/login'

```javascript
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
```


 
 
