// Write your solution in this file!
const employee = {
    name: "Zoe",
    age: 29,
    streetAddress: "2 Hopetone Street, Melbourne"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({},employee,{[key]:value});
 }


 //this function should work the same as 

 function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[value];
    return employee;
 }

 //but it should mutate the employee Object passed in

 function updateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee;
 }

 //this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. 

 function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({},employee);
    delete newObj[key];
    return newObj;
 }

 //destructively delete from employee by key
 function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];

    return employee;
 }



