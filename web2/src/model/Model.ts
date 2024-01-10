export class Department {
    id: number;
    code: string;
    name: string;

    constructor(id: number, code: string, name: string) {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    static createDepartment(code: string, name: string): Department {
        return new Department(-1, code, name);
    }

}

export class Employee {
    id: Number;
    firstName: string;
    lastName: string;
    email: string;
    dob: Date;
    age: Number | undefined;
    salary: Number;
    department: Department;

    constructor(id: Number, firstName: string, lastName: string, email: string, dob: Date, age: Number | undefined, salary: Number, department: Department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }

    static createEmployee(firstName: string, lastName: string, email: string, dob: Date, salary: Number, department: Department): Employee {
        return new Employee(-1, firstName, lastName, email, dob, undefined, salary, department);
    }


}