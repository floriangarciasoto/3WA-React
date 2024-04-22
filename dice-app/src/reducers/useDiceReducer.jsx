import { useReducer } from "react";

function getRandomInt(min,max) {
    return Math.floor(Math.random() * max) + min;
}

const diceBaseState = {
    rolls: 1000,
    done: false,
    result: [],
    brelans: [0, 0, 0, 0, 0, 0]
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
            const result = [];
            for (var i = 0; i < state.rolls; i++) result.push([getRandomInt(1,6),getRandomInt(1,6),getRandomInt(1,6)]);
            const brelans = state.brelans.map((brelansNb,index) => result.filter(roll => roll.join('') === (''+(index+1)).repeat(3)).length);
            return {
                ...state,
                done: true,
                brelans,
                result
            }

        default:
            return state
    }
}

export default () => useReducer(diceReducer,diceBaseState);
