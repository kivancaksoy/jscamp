import DataError from "../models/dataError.js"
export default class ValidationService {
    constructor(){
        globalThis.errors = []
    }

    validate(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasNoErrors = true
        for (const field of requiredFields) {
            if (!user[field]) {
                hasNoErrors = false
                //return new DataError(`Validation problem. ${field} is required`, user)
                globalThis.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }
        }
        return hasNoErrors
    }

    validateCustomerAge(user) {
        let hasNoErrors = true
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasNoErrors = false
            //return new DataError(`Validation problem. ${user.age} is not a number`, user)
            globalThis.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }

        return hasNoErrors
    }
}