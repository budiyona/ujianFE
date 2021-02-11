import './App.css';
import { Provider } from "react-redux";
import {Footer, Nav, Body}  from "./template";
import { createStore } from 'redux';
import rootReducer from "./redux";
import { BrowserRouter as Router } from "react-router-dom"


// function saveToLocalStoreage(state){
//   try{
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   }catch(e){
//     console.log(e);
//   }
// }
// function loadFromLocalStorage(){
//   try {
//     const serializedState = localStorage.getItem('state')
//     if(serializedState===null) return undefined
//     return JSON.parse(serializedState)
//   } catch (e) {
//     console.log(e);
//     return undefined
//   }
// }
// const persistedState = loadFromLocalStorage()

//store 
// const store = createStore(rootReducer, persistedState, 
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  

// store.subscribe(()=>saveToLocalStoreage(store.getState()))
// localStorage.clear()
const store = createStore(rootReducer, 
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav></Nav>
        <Body></Body>
        <Footer></Footer>
      </Router>
    </Provider>
  );
}

export default App;
