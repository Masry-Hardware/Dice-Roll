function DiceRoll() {
    let values=[]
    let images=[]
    let numberOfDices = document.getElementById("numofdice").value;
    for(let i=0;i<numberOfDices;i++){
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="${value}.png">`)
    }
    
    document.getElementById("resulttxt").innerText = `${values}`
    document.getElementById("resultimg").innerHTML = images.join(" ")
    console.log(values)
}