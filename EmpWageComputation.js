const isPartime   =1;
const isFullTime  =2;
const PartimeHrs  =4;
const FullTimeHrs =8;
const WagePerHrs  =20;
const totalWorkingDays = 20;
const totalWorkingHrs = 160;

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
    let empWorkingDays=0;
    let empWorkingHrs =0;
    let empHrs = 0;
    while(empWorkingDays<totalWorkingDays && empWorkingHrs<=totalWorkingHrs){
        let empCheck =Math.floor(Math.random()*10)%3;
        empHrs += getEmpHrs(empCheck);
        empWorkingDays++;
    }

    let totalEmpWage = empHrs * WagePerHrs;
    console.log("Total Working Days:"+totalWorkingDays,"Total Employee Hours :"+ empHrs, "Total Employee Wage :" + totalEmpWage);
