import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import CustomerService from "./customerService.js";
import EmployeeService from "./employeeService.js";

export default class UserTypeService {
    constructor(errors, _customerService, _employeeService) {
        this.errors = []
        //this.userService = userService
        this._customerService = CustomerService()
        this._employeeService = EmployeeService()
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    this._customerService.add(user)
                    break;

                case "employee":
                    this._employeeService.add(user)
                    break;

                default:
                    return new DataError("Wrong user type", user)
                    break;
            }

        }
    }
}