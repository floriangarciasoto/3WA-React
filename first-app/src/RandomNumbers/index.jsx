import { useEffect, useState } from 'react';

function generate() {
    const numbers = [];
    for (var i = 1; i <= 20; i++) numbers.push(i);
    numbers.sort((a, b) => 0.5 - Math.random());  
    return numbers;
}

function RandomNumbers() {
    let numbers = generate();
    
    return (
        <div>
        {
            numbers.map((number,index) => <div key={index}>{number}</div>)
        }
        </div>
    )
}

export default RandomNumbers
