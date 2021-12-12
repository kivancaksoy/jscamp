import ValidationService from "./validationService.js"

export default class EmployeeService {
    constructor() {
        this.employees = []
    }

    add(user) {
        let validationService = new ValidationService()
        if(validationService.validate(user)) {
            this.employees.push(user)
        }
    }

    list() {
        return this.employees
    }

    getById(id){
        return this.employees.find(u => u.id === id)
    }

}