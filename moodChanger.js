const { doc } = require("prettier")

const mood = document.getElementById('mood')
const happy = document.getElementById('happy')
const sad = document.getElementById('sad')
const angry = document.getElementById('angry')
const confused = document.getElementById('confused')

happy.addEventListener('click', ()=> {
    store.dispatch({type: "HAPPY"})
    const happyMood = store.getState().mood
    mood.innerText = happyMood
})

sad.addEventListener('click', ()=>{
    store.dispatch({type: "SAD"})
    const sadMood = store.getState().mood
    mood.innerText = sadMood
})

angry.addEventListener('click', ()=>{
    store.dispatch({type: "ANGRY"})
    const angryMood = store.getState().mood
    mood.innerText = angryMood
})

confused.addEventListener('click', ()=>{
    store.dispatch({type: "CONFUSED"})
    const confusedMood = store.getState().mood
    mood.innerText = confusedMood
})