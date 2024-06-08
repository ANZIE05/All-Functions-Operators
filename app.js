// (FUNCTIONS)    ---------------------->>>>    HOME WORK PRACTICE   >>>>------------------------------
// function calculate() {
//     let result = 5 + 10 + 15;
//     console.log(result)    
// }
// calculate()
// // ________________________________
// // (RETURNING FUNCTION)
// function calculateNum(): number {
//     let result = 5 + 5 + 5;
//     return result;
// }
// let answer: number = calculateNum();
// console.log(answer);
// ________________________________
// (PARAMETERS AND ARGUMENTS)
// function onlineShopping(price: number, dc: number){
//     let totalAmount = price + dc;
//     console.log(`Your total bill is ${totalAmount}`);
// }
// onlineShopping(5000, 500)
// onlineShopping(3000, 500)
// onlineShopping(2000, 500)
// (RETURNING PARAMETERS AND ARGUMENTS)
// function totalAmount1 (price: number, dc: number){
//     return price + dc;
// }
// let totalBill = 
// totalAmount1(5000, 500)
// console.log(totalBill)
// ______________________________________________
// (DEFAULT PARAMETERS)
// function grocery(oil = 1000, ghee = 800, sugar = 700) {
// return oil + ghee + sugar;
// }
// let totalItems = grocery()
// console.log(totalItems)
// // ------------------->>>>>>>>>>   OR   <<<<<<<<<<<<------------
// function grocery1(oil = 1000, ghee = 800, sugar = 500) {
//     return oil + ghee + sugar;
//     }
//     let totalItems1 = grocery1(1000) 
//     console.log(totalItems1)
//     // ------------------->>>>>>>>>>   OR   <<<<<<<<<<<<------------
// function groceryDiscount(oil = 1000, ghee = 800, sugar = 500) {
//     return oil + ghee + sugar;
//     }
//     let totalItems2 = groceryDiscount(1000, 600, 400) 
//     console.log(totalItems2)
// ___________________________________________________________
// (REST PARAMETERS)
// function foodList(biryani = 500, karahi = 1500, pastha = 1000, ...restaurant: number[]){
//     console.log(biryani, karahi, pastha)
//     console.log(restaurant)
// }
// foodList(500, 1500, 1000, 2000, 500)
// // (SPREAD PARAMETERS)
// function foodList1(biryani: number = 500, karahi: number = 1500, pastha: number = 1000, ...restaurant: number[]){
//     console.log(biryani, karahi, pastha)
//     console.log(...restaurant)
// }
// foodList1(500, 1500, 1000, 2000, 500)
// ___________________________________________________________
// (ARROW FUNCTIONS)
// let makeList = () => 100 + 200 + 300 + 400;
// let total = makeList()
// console.log(total);
// ------------------->>>>>>>>>>   OR   <<<<<<<<<<<<------------
// let makeList1 = (a: number, b: number, c: number, d: number): number => (a + b + c + d);
// let total1: number = makeList1(100 , 200 , 300 , 400)
// console.log(total);
// ______________________________________________________
// (RETURNING ARROW FUNCTIONS)
// let makeList = () => { return 250 + 350 + 400 + 500};
// let total = makeList();
// console.log(total);
// // ------------------->>>>>>>>>>   OR   <<<<<<<<<<<<------------
// let makeList1 = () => {
// let total = 250 + 350 + 400 + 500;
// return total;
// };
// let total1 = makeList1();
// console.log(total);
// _______________________________________________________
// // (GLOBAL VARIABLES)
// let generalElections = "Prime Minister";
// function country(){
//     console.log(generalElections);
// }
// console.log(generalElections)
// // (LOCAL VARIABLES)
// function country1(){
//     let provincialElections = "Chief Minister";
//     console.log(provincialElections);
// }
// country1()
// ______________________________________________________
// (ANONYMOUS FUNCTION)
// let noName = function() {
//     let counts = 2 + 2 + 2 + 2 +2;
// console.log(counts);
// }
// noName();
// // {IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)}
// (function(){
//     console.log("<<<<---- I print without any function name and invoke immediately ---->>>>");
// })();
// _________________________________________________________
// (RECURSIVE FUNCTIONS)
// function countDown(list: number): void{
//     if(list <=0) {
//         console.log("Done!")
//         return;  
//     }
// console.log(list)
// countDown(list -1)
// }
// countDown(5);
// ________________________________________________________
// (NESTED FUNCTION)
// function parentFunc (){
// function childFunc (){
//     let hello: string = 'Hello from child function';
//     console.log(hello);
// }
// childFunc();
// }
// parentFunc();
// ----------------------------OR----------------------
function parentFunc() {
    var childFunc = function () {
        var hello = "hello from child function";
        console.log(hello);
    };
    childFunc();
}
parentFunc();
