{
    const isPRESENT = 1
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == isPRESENT)
    {
    console.log("Employee is Present");
    }
    else
    {
    console.log("Employee is Absent");
    }
}

const isPartime   =1;
const isFullTime  =2;
const PartimeHrs  =4;
const FullTimeHrs =8;
const WagePerHrs  =20;

let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch (empCheck){
    case isPartime:
        empHrs=PartimeHrs;
        break;
    case isFullTime:
        empHrs=FullTimeHrs;
        break;
    default:
        empHrs=0;
}
let empWage=empHrs*WagePerHrs;
console.log("Employee Wage:",empWage);