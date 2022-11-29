function getMilk(money, bottle_price) {
            
    // bottles = Math.floor(money / bottle_price);
    bottles = calc_Bottles(money, bottle_price);
    console.log(`Each bottle cost $${bottle_price} With $${money}, you can buy ${calc_Bottles(money, bottle_price)} bootles`)
    // console.log(`Each bottle cost $${bottle_price} With $${money}, you can buy ${bottles} bootles`)
    
    console.log(`Your change is $${calc_Change(money, bottle_price)}`);
    return money, bottle_price;
}

function calc_Bottles(starting_Money, cost_per_bottle) {
    return number_of_bottles = Math.floor(starting_Money / cost_per_bottle);
}

function calc_Change(starting_Money, cost_per_bottle) {
    return change = starting_Money % cost_per_bottle;
}

getMilk(4, 3)