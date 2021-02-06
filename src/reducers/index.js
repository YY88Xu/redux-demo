const defaultState = {
    counter: 10
}
export default (state = defaultState, action)=>{
    if(action.type==="add"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.counter = newState.counter + action.value;
        return newState;
    }
    return state;
}