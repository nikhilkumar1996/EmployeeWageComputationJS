const isPartime   =1;
const isFullTime  =2;
const PartimeHrs  =4;
const FullTimeHrs =8;
const WagePerHrs  =20;

function getEmpHrs(empCheck){
    switch (empCheck){
        case isPartime:
            return PartimeHrs;
        case isFullTime:
            return FullTimeHrs;
        default:
            return 0;
    }

}
let empCheck = Math.floor(Math.random()*10)%3;
let empHrs =getEmpHrs(empCheck);
let empWage=empHrs*WagePerHrs;
console.log("Employee Wage for a day:",empWage);

{
    const totalWorkingDays = 20;
    let totalempHrs=0;
    for(let day =1;day<=totalWorkingDays;day++){
        let empCheck =Math.floor(Math.random()*10)%3;
        totalempHrs += getEmpHrs(empCheck);
    }

    let totalEmpWage = totalempHrs * WagePerHrs;
    console.log("Total Hours :"+ totalempHrs, "Total Employee Wage :" + totalEmpWage);
}