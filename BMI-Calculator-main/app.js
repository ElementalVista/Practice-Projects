
let submitBtn = document.querySelector('.submit') //Submit button
let displayBMI = document.querySelector('.display-bmi') //BMI result text
let displayBMIText = document.querySelector('.bmi-text') //BMI weight range text

//Calculates BMI
submitBtn.addEventListener('click',()=>{
let weight = document.querySelector('.weight').value
let height = document.querySelector('.height').value
let bmi = weight / Math.pow(height,2)

displayBMI.style.display = 'block' //Reveals hidden <p> tag
displayBMI.textContent =`Your BMI is: ${Math.floor(bmi)}` //Displays BMI result

//Control flow for weight range
if (bmi < 18.5){
    return displayBMIText.textContent =`You are underweight!`
}else if(bmi >= 18.5 && bmi <=24.9){
    return displayBMIText.textContent =`You have normal weight!` 
}else if(bmi >=25 && bmi <=29.9){
    return displayBMIText.textContent =`You are overweight!`
}else{
    return  displayBMIText.textContent =`You are in obesity range!`
}

})






