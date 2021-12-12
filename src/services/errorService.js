import CustomerService from "./customerService.js"
import EmployeeService from "./employeeService.js"
import ValidationService from "./validationService.js"

export default class ErrorService {
    constructor() {
        globalThis.errors = []
    }
    errorList() {
        return globalThis.errors
    }

}