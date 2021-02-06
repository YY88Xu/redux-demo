import store from './store';
import {addCounter} from './actions/actionCreator';

// 初始化
const stateData = store.getState();
document.getElementById("counter").innerHTML = stateData.counter;
document.getElementById("otherUsed").innerHTML = stateData.counter;
document.getElementById("myBtn").addEventListener("click", ()=>{
    store.dispatch(addCounter(1));
})

// 订阅
store.subscribe(()=>{
    const stateData = store.getState();
    document.getElementById("counter").innerHTML = stateData.counter;
    document.getElementById("otherUsed").innerHTML = stateData.counter;
})