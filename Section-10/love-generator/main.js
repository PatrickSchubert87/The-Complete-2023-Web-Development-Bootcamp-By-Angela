function loveGenerator () {
    let name1 = prompt("What's your name");
    let name2 = prompt("What's your name");
    // name1 = document.querySelector('#name1');
    // name2 = document.querySelector('#name2');
    // name1 = name1.value;
    // name2 = name2.value;

    let nameInLove1 = Math.floor(Math.random() * 50) + 1;
    let nameInLove2 = Math.floor(Math.random() * 50) + 1;
    alert(`${name1} is ${nameInLove1}% and ${name2} is ${nameInLove2}% in Love with each other, together they are ${nameInLove1 + nameInLove2}% in Love`);
}

loveGenerator();