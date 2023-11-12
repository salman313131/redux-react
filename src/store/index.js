const redux = require('redux')

const counterReducer = (state={counter:0},action) =>{
    if(action.type === 'increament'){

        return{
            counter : state.counter + 1
        }
    }
    if(action.type === 'decrement'){

        return{
            counter : state.counter + 1
        }
    }
    return state
}

const store = redux.createStore(counterReducer)

export default store