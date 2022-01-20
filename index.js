/* Your Code Here */

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

function createEmployeeRecord (record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records) {
    let temp = []
    records.forEach(element => temp.push(createEmployeeRecord(element)))
    return temp
}


function createTimeInEvent (timeEvent) {
   let buildInTimeEvent = {
        type: 'TimeIn',
        date: timeEvent.split(' ')[0],
        hour: parseInt(timeEvent.split(' ')[1])  
    }
    this.timeInEvents.push(buildInTimeEvent)
    return  this
}

function createTimeOutEvent (timeEvent) {
    let buildOutTimeEvent = {
         type: 'TimeOut',
         date: timeEvent.split(' ')[0],
         hour: parseInt(timeEvent.split(' ')[1])
     }
     this.timeOutEvents.push(buildOutTimeEvent)
     return  this
 }

 function hoursWorkedOnDate(date){
    //return ((employee.timeOutEvents[0].hour - employee.timeInEvents[0].hour) / 100)
    let timeIn = 0
    let timeOut = 0
    
    for (let each of this.timeInEvents) {
        if (each.date == date) {timeIn = each.hour}
    }
    for (let each of this.timeOutEvents) {
        if (each.date == date) {timeOut = each.hour}
    }
    return (timeOut - timeIn) / 100


}

 function wagesEarnedOnDate(date){
    return (this.payPerHour * hoursWorkedOnDate.call(this, date))
 }

//  function allWagesFor(employee){
//     // let inTimes = []
//     // let outTimes = []
//     //let timeHolder = []
//     let totalHours = 0

//     for (var each of employee.timeInEvents) {
//         totalHours += hoursWorkedOnDate(employee, each.date)
//     }
      
//     return ((totalHours) * employee.payPerHour)
//  }

 function findEmployeeByFirstName (srcArray, firstName) {
     for (let each of srcArray) {
         if (each.firstName == firstName) {return each}
     }
 }

//  function calculatePayroll (employeeArray) {
//     return employeeArray.reduce(function(each, calc){
//         return each + allWagesFor.call(calc)
//     }, 0)
//  }
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}