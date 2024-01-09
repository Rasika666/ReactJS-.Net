export class Department {
    id: Number;
    code: String;
    name: String;

    constructor(id: Number, code: String, name: String) {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    static createDepartment(code: String, name: String): Department {
        return new Department(-1, code, name);
    }

}

export class Employee {
    id: Number;
    firstName: String;
    lastName: String;
    email: String;
    dob: Date;
    age: Number | undefined;
    salary: Number;
    department: Department;

    constructor(id: Number, firstName: String, lastName: String, email: String, dob: Date, age: Number | undefined, salary: Number, department: Department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }

    static createEmployee(firstName: String, lastName: String, email: String, dob: Date, salary: Number, department: Department): Employee {
        return new Employee(-1, firstName, lastName, email, dob, undefined, salary, department);
    }


}