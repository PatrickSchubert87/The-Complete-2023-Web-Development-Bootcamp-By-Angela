function bmiCalculator(weight, height) {
    let squareHeight = height * height;
    let heightDivided = squareHeight / 10000;
    let bmiCalc = weight / heightDivided;
    let bmi = Math.round(bmiCalc)

    console.log(bmi)
    return bmi;
}
bmiCalculator(56, 160);

/****
 * Solution of course 
 */

// function bmiCalculator(weight, height) {
//     let bmi= weight / (height * height);
//     // let bmi = bmiCalculation * 10000
//     console.log(bmi)
//     return bmi;
// }

// bmiCalculator(56, 1.6);
// function bmiCalculator(weight, height) {
//     let bmi= weight / Math.pow(height, 2);
//     // let bmi = bmiCalculation * 10000
//     console.log(bmi)
//     return bmi;
// }
// bmiCalculator(56, 1.6);