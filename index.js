let employeeArray =[];
function createEmployeeRecord(employee) {
    let employeeObject = {
        firstName: employee[0],
        familyName:employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    employeeArray.push(employeeObject)
    return employeeObject
}

function createEmployeeRecords(employeeArr){
    return employeeArr.map(employee => {
        return createEmployeeRecord(employee)
    })
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push ({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this
}
function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ")
        this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
        })
        return this
}

function hoursWorkedOnDate(workDate){
    let timeIn = this.timeInEvents;
    let resultIn = timeIn.find(element => element.date === workDate )
    let timeOut = this.timeOutEvents;
    let resultOut = timeOut.find(element => element.date === workDate )
    let hoursWorked = resultOut.hour - resultIn.hour;
        return hoursWorked/100
        }

function wagesEarnedOnDate(formDate){
    let hourlyRate = this.payPerHour;
    let hoursWorked = hoursWorkedOnDate.call(this, formDate)
    return hourlyRate * hoursWorked
}

function findEmployeeByFirstName(employeeArray, firstName){
    let employee = employeeArray.find(employee => employee.firstName == firstName)
    return employee
}
function calculatePayroll(employeeArray){
    let wagesArray = employeeArray.map(employee => allWagesFor.call(employee))
    console.log(wagesArray)
    let reducer = (accumulator, curr) => accumulator + curr;
    return wagesArray.reduce(reducer)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

