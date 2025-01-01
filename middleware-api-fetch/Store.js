import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"

let initialState={
  userData:{}
}

function dataReducer(state=initialState,action){
    switch(action.type){
      case "add":
        return {...state,userData:action.payload}
    }

}

let store=createStore(dataReducer,applyMiddleware(thunk))

export default store