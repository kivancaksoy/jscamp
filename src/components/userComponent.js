import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Kıvanç", "Aksoy", "İzmir")
let user2 = new User(1, "İnanç", "Gök", "Ankara")

userService.add(user1)
userService.add(user2)

// console.log(userService.list())
// console.log(userService.getById(1))



/*  //prototyping
let customer = {id:1, firstName:"Kıvanç"}

customer.lastName = "Aksoy"
console.log(customer.lastName) */

console.log("-----------------------------------------------------------------")

userService.load();



let customerToAdd = new Customer(1, "Begüm", "Yılmaz", "Ankara", "dfgdfs")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())