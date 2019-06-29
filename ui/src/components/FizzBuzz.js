import React from 'react';
// esto hacer fizz buzz
const fizzBuzzer = num => {
    if(num % 2 === 0 && num % 3 === 0){
        return 'FizzBuzz'
    }else if(num % 2 === 0){
        return 'Fizz'
    }else if(num % 3 === 0){
        return 'Buzz'
    }else{
        return num
    }
}

const FizzBuzz = ({ arr }) => {

    return (
        <ul>
            {
                arr.map((num) => <li key={num}>{ fizzBuzzer(num) }</li>)
            }
        </ul>
    );
}

export default FizzBuzz;
