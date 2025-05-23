import type {Agency} from "./agency.ts";

export type ChristmasVouchers = Map<number, number>

export class Employee {
    firstName: string;
    lastName: string;
    dateHired: Date;
    jobTitle: string;
    annualGrossSalary: number;
    department: string;
    agency: Agency;
    private childrenBirthYear: number[];

    constructor(
        firstName: string,
        lastName: string,
        dateHired: string,
        jobTitle: string,
        annualGrossSalary: number,
        department: string,
        agency: Agency,
        childrenBirthYear?: number[],
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.agency = agency;
        this.childrenBirthYear = childrenBirthYear ? childrenBirthYear : [];
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

    canGetHolidayVouchers(): boolean {
        return this.seniority() >= 1;
    }

    computeChristmasVouchers(currentYear: number): ChristmasVouchers {
        const voucherValueForAge =
            (age: number): number => {
                let value = 0;
                if (age <= 10) {
                    value = 20;
                } else if (age <= 15) {
                    value = 30;
                } else if (age <= 18) {
                    value = 50;
                }
                return value;
            };

        const vouchers: ChristmasVouchers = new Map();

        for (let birthYear of this.childrenBirthYear) {
            const age = currentYear - birthYear;
            const voucherValue = voucherValueForAge(age);
            if (voucherValue > 0) {
                if (!vouchers.has(voucherValue)) {
                    vouchers.set(voucherValue, 0);
                }
                vouchers.set(
                    voucherValue,
                    (vouchers.get(voucherValue)! + 1),
                );
            }
        }
        return vouchers;
    }
}
