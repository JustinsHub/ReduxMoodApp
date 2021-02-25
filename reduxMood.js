const INITIAL_STATE = {mood: "(-.-)"}

const moodChanger = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "HAPPY":
            return {...state, mood: "ɷ◡ɷ"}
        case "SAD":
            return {...state, mood: state.mood = "Q.Q"}
        case "ANGRY":
            return {...state, mood: state.mood = "ಠ_ಠ"}
        case "CONFUSED":
            return {...state, mood: state.mood = "(・・?"}
        case "RESET":
            return state
    }
}

const store = Redux.createStore(moodChanger)