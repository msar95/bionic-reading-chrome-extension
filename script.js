const input = document.getElementById("input");


function displayOutputText() {
    const updatedOutput = mergeFirstTwoCharsWithRest();
    const txt = document.createElement("p");
    txt.innerHTML = updatedOutput.join(" ");
    document.getElementById("output").appendChild(txt);
}

function getFirstTwoChars() {
    const textArr = input.value.split(/(\s+)/);
    const updatedArr = [];
    textArr.forEach(el => {
        if(el !== " ")
        updatedArr.push(el.slice(0,2));
    });
    return updatedArr;
}

function getRemainingChars() {
    const textArr = input.value.split(/(\s+)/);
    const updatedArr = [];
    textArr.forEach(el => {
        if(el !== " ")
        updatedArr.push(el.slice(2));
    });
    return updatedArr;
}

function transFirstTwoCharsBold(){
    const arr = getFirstTwoChars();
    const updatedArr = [];
    arr.forEach(el => { 
        updatedArr.push(`<b>${el}</b>`);
    });
    return updatedArr;
}

function mergeFirstTwoCharsWithRest(){
    const firstTwoArr = transFirstTwoCharsBold();
    const restArr = getRemainingChars();
    const updatedArr = [];
    for (let index = 0; index < restArr.length; index++) {
        updatedArr.push(firstTwoArr[index] + restArr[index]);
    }
    return updatedArr;
}

