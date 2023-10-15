// functionn Declaration 
// Kenguru masalasi


function kenguru(k_1, v_1, k_2, v_2) {
    let attempts = 0;
    while(k_2 < k_1) {
        k_1 += v_1
        k_2 += v_2
        attempts++
    }

    return attempts
}

let res = kenguru(30, 1, 15, 2)
// console.log(res)

function stars(a) {
    for(let i = 1; i <= 5; i++) {
        let row = "";
        for(let j = 1; j <= i; j++) {
           row += a
        }
        console.log(row)
    }
    
}

// stars("*")

function personData(name,surname,age,gender,education) {
    const text = `Hello my name is ${name} and my surname is ${surname}, I'm ${age} years old  ${gender === "man" ? "man" : "Women"}, and ${education ? "Currently i am a student" : "Now, I'm working"}`
    return text
}

// console.log(personData("Ulugbek", "Ortigaliyev", 19, "man", true))




// Function expression that checks whether market is making profit by buing or selling stocks  


const maxProfit = function(...prices) {
    let buyingProfit = 0;
    let sellingProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            let dif = prices[i] - prices[i-1]
            buyingProfit += dif
        }else if(prices[i] < prices[i-1]) {
            let dif = prices[i-1] - prices[i]
            sellingProfit += dif
        }
    }
    return `Buying profit is ${buyingProfit} and selling profit is ${sellingProfit}`
}

console.log(maxProfit(7,1,5,3,6,4))
console.log(maxProfit(8,5,3,2,1,6))
console.log(maxProfit(2,1,12,3,5,7))

