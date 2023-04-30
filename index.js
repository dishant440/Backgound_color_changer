
const colorArr = [" #e09729","#98e029"," #29b1e0"," #e05429"," #e029db"," #11eff4"];
const button = document.getElementById("btn");
let colorcode = document.getElementById("color-code");
// button.innerText.style.color = "white";

button.addEventListener('click',()=>{
    // let randomnumber = 2;
    let randomnumber = Math.random()*5;
    let decimal = Math.trunc(randomnumber);
    // console.log(decimal);
    str = colorArr[decimal];
    document.body.style.backgroundColor = str; 
    colorcode.innerText = str;
    button.style.border = `2px solid ${str}`;

});