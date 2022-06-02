const input = document.getElementById("input");


function displayOutputText() {
    const updatedOutput = mergeFirstCharsWithRest();
    const txt = document.createElement("p");
    txt.innerHTML = updatedOutput.join(" ");
    document.getElementById("output").appendChild(txt);
}

function getFirstChars() {
    const textArr = input.value.split(/(\s+)/);
    const updatedArr = [];
    textArr.forEach(el => {
        if(el !== " ")
        updatedArr.push(getWordsFirstHalf(el));
    });
    console.log(updatedArr)
    return updatedArr;
    
}

function getRemainingChars() {
    const textArr = input.value.split(/(\s+)/);
    const updatedArr = [];
    textArr.forEach(el => {
        if(el !== " ")
        updatedArr.push(getWordsSecondHalf(el));
    });
    return updatedArr;
}

function transFirstCharsBold(){
    const arr = getFirstChars();
    const updatedArr = [];
    arr.forEach(el => { 
        updatedArr.push(`<b>${el}</b>`);
    });
    return updatedArr;
}

function mergeFirstCharsWithRest(){
    const firstHalfArr = transFirstCharsBold();
    const restArr = getRemainingChars();
    const updatedArr = [];
    for (let index = 0; index < restArr.length; index++) {
        updatedArr.push(firstHalfArr[index] + restArr[index]);
    }
    return updatedArr;
}

function getWordsFirstHalf(el){
    const obj = {
        1 : el.slice(0,1),
        2 : el.slice(0,2),
        3 : el.slice(0,2),
        4 : el.slice(0,2),
        5 : el.slice(0,3),
        6 : el.slice(0,3),
        7 : el.slice(0,4),
        8 : el.slice(0,4),
        9 : el.slice(0,5),
        10 : el.slice(0,5)
    }
    return obj[el.length] ?? el.slice(0,6);
}

function getWordsSecondHalf(el){
    const obj = {
        1 : el.slice(1),
        2 : el.slice(2),
        3 : el.slice(2),
        4 : el.slice(2),
        5 : el.slice(3),
        6 : el.slice(3),
        7 : el.slice(4),
        8 : el.slice(4),
        9 : el.slice(5),
        10 : el.slice(5)
    }
    return obj[el.length] ?? el.slice(6);
}