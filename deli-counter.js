// 1. Write your functions here
let numberInLine = 0;
const takeANumber = (arr, name) => {
    let order = {
        name,
        number: ++numberInLine,
    }
    arr.push(order);
    console.log(`Welcome, ${order.name}. You are number ${order.number} in line.`)
}

const line = (arr) => {
    if (arr.length == 0) {
        console.log('The line is currently empty');
        return;
    }
    let toAdd = "The line is currently: " + arr.map(function (order) {
        let str = `${order.number}. ${order.name} `
        return str;
    }).join(' ');
    console.log(toAdd);
}

const nowServing = (arr) => {
    if (arr.length == 0){
        console.log('There is nobody waiting to be served!');
        return;
    }
    numberInLine = 0;
    console.log(`Currently serving ${arr[0].name}.`);
    arr.shift();
    arr = arr.map((order) => order.clientNumber=++numberInLine);
}

// 2. Example Usage

const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"