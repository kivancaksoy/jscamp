import BaseLogger from "../crossCuttingConcerns/logging/baseLogger.js"
import ElasticLogger from "../crossCuttingConcerns/logging/elasticLogger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import ErrorService from "../services/errorService.js"
import UserTypeService from "../services/userTypeService.js"
//import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new ElasticLogger()
//let userService = new UserService(logger1)
let customerService = new CustomerService()
//let userTypeService = new UserTypeService()
let employeeService = new EmployeeService()
let errorService = new ErrorService();

let user1 = new User(1, "Kıvanç", "Aksoy", "İzmir","11")
//let user2 = new User(1, "İnanç", "Gök", "Ankara")

customerService.add(user1)
//console.log(customerService.customers)
//userService.add(user2)

// console.log(userService.list())
// console.log(userService.getById(1))



/*  //prototyping
let customer = {id:1, firstName:"Kıvanç"}

customer.lastName = "Aksoy"
console.log(customer.lastName) */

console.log("-----------------------------------------------------------------")

//userService.load();
//userTypeService.load()



let customerToAdd = new Customer(1, "Begüm", "Yılmaz","ankara","11")
customerToAdd.type = "customer"
customerService.add(customerToAdd)
console.log(customerService.customers)
console.log(employeeService.employees)
console.log(errorService.errorList())
//console.log(userService.getCustomersSorted())