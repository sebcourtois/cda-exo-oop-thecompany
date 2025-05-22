import type {Agency} from "./agency.ts";

export class Employee {
    firstName: string;
    lastName: string;
    dateHired: Date;
    jobTitle: string;
    annualGrossSalary: number;
    department: string;
    agency: Agency;

    constructor(
        firstName: string,
        lastName: string,
        dateHired: string,
        jobTitle: string,
        annualGrossSalary: number,
        department: string,
        agency: Agency,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.agency = agency;
        this.dateHired = new Date(Date.parse(dateHired));
        this.jobTitle = jobTitle;
        this.annualGrossSalary = annualGrossSalary;
        this.department = department;
    }

    seniority(): number {
        const today = new Date();
        return today.getFullYear() - this.dateHired.getFullYear();
    }

    computeAnnualBonus(): number {
        return this.annualGrossSalary * 0.05 + this.seniority() * (this.annualGrossSalary * 0.02);
    }

    fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }
}