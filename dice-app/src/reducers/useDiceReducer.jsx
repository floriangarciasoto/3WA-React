import { useReducer } from "react";

function getRandomInt(min,max) {
    return Math.floor(Math.random() * max) + min;
}

const diceBaseState = {
    rolls: 100,
    done: false,
    result: [],
    brelans6: 0
}

const diceReducer = (state,action) => {
    switch(action.type) {
        case 'updateRolls':
            return {
                ...state,
                done: false,
                rolls: action.payload
            }
        
        case 'roll':
            const res = [];
            for (var i = 0; i < state.rolls; i++) res.push([getRandomInt(1,6),getRandomInt(1,6),getRandomInt(1,6)]);
            const brelans6 = res.filter(roll => roll.join('') === '666').length;// x)
            return {
                ...state,
                done: true,
                brelans6,
                result: res
            }

        default:
            return state
    }
}

export default () => useReducer(diceReducer,diceBaseState);
