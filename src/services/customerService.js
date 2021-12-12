import DataError from "../models/dataError.js"
import ErrorService from "./errorService.js"
import ValidationService from "./validationService.js"
export default class CustomerService {
    constructor() {
        this.customers = []
        this.errors = []
    }

/*     add(user) {
        console.log("add calıstı")
        if(this.validateCustomer(user) && this.validateCustomerAge(user)) {
            this.customers.push(user)
        } 
    } */

    add(user) {
        let validationService = new ValidationService()
        console.log("add calıstı")
        if(validationService.validate(user) && validationService.validateCustomerAge(user)) {
            this.customers.push(user)
        }
    }




    list() {
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            } else if (customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return -1
            }
        })
    }

    
}