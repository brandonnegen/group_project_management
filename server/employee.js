var scrumNum = require('./empScrum');
var empName = require('./empName');
var empSkill = require('./empSkill');




function CreateEmp(){
    this.employeeScrumNum = scrumNum();
    this.employeeName = empName();
    this.employeeSkill = empSkill();
}

module.exports = CreateEmp;