import "./style.css";
import {EMPLOYEES} from "./sample-data.ts";
import type {ChristmasVouchers, Employee} from "./employee.ts";


// function htmlToElement(html: string) {
//     const template = document.createElement("template");
//     template.innerHTML = html;
//     return template.content.firstElementChild as HTMLElement;
// }

function renderTableRowHtml(rowData: Array<any>) {
    return `
    <tr>
        ${rowData.map(value => `<td>${value}</td>`).join("\n        ")}
    </tr>
    `.trim();
}

type FieldName = string

function renderTableHtml(bodyData: Array<Map<FieldName, any>>, headerData: Map<FieldName, any>) {
    const fieldNames = Array.from(headerData.keys());
    const headerValues = Array.from(headerData.values());

    const rowsData: Array<Array<any>> = bodyData.map(
        rowMap => fieldNames
            .map(field => rowMap.get(field))
            .filter(value => value !== undefined),
    );
    return `
    <table>
    <thead>
        <tr>
        ${headerValues.map((value) => `<th scope="col">${value}</th>`).join("\n        ")}
        </tr>
    </thead>
    <tbody>
        ${rowsData.map(rowData => renderTableRowHtml(rowData)).join("\n        ")}
    </tbody>
    </table>
    `.trim();
}

const total_cost = EMPLOYEES
    .map((e) => e.annualGrossSalary + e.computeAnnualBonus())
    .reduce((accum, value) => accum + value, 0);


function formatChristmasVouchers(vouchersMap: ChristmasVouchers): string {
    return Array.from(vouchersMap.entries())
        .map((items) => `${items[1]}×${items[0]}`)
        .join("+");
}

function formatEmployeeFields(employee: Employee): Map<string, any> {
    return new Map([
        ["agency", employee.agency.name],
        ["meal_policy", employee.agency.mealPolicy.name],
        ["department", employee.department],
        ["last_name", employee.lastName.toUpperCase()],
        ["first_name", employee.firstName],
        ["job_title", employee.jobTitle],
        ["hired", employee.dateHired.toISOString().split("T", 2)[0]],
        ["seniority", employee.seniority().toString()],
        ["salary", employee.annualGrossSalary.toFixed(1)],
        ["bonus", employee.computeAnnualBonus().toFixed(2)],
        ["holiday_vouchers", employee.canGetHolidayVouchers() ? "Yes" : "No"],
        ["christmas_vouchers", formatChristmasVouchers(employee.computeChristmasVouchers(new Date().getFullYear()))],
    ]);
}

function fieldToTitle(fieldName: string) {
    return fieldName.split("_")
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
}

function headersFromEmployeeFields(employeeFields: Map<string, any>): Map<string, any> {
    return new Map(Array.from(employeeFields.keys()).map(field => [field, fieldToTitle(field)]));
}

const sortedEmployees = [...EMPLOYEES];
sortedEmployees.sort((e1, e2) => {
    if (e1.fullName() === e2.fullName()) return 0;
    return (e1.fullName() > e2.fullName()) ? 1 : -1;
});
const tableData1 = sortedEmployees.map(e => formatEmployeeFields(e));
const headerData1 = headersFromEmployeeFields(tableData1[0]);
headerData1.delete("holiday_vouchers");
headerData1.delete("christmas_vouchers");

sortedEmployees.sort((e1, e2) => {
    const s1 = e1.department + e1.fullName();
    const s2 = e2.department + e2.fullName();
    if (s1 === s2) return 0;
    return (s1 > s2) ? 1 : -1;
});
const tableData2 = sortedEmployees.map(e => formatEmployeeFields(e));
const headerData2 = headersFromEmployeeFields(tableData2[0]);
headerData2.delete("holiday_vouchers");
headerData2.delete("christmas_vouchers");

const appDiv = document.querySelector("#app")!;
appDiv.innerHTML = `
<p>La Franche Company</p>
${renderTableHtml(tableData1, headerData1)}
<p>La Franche Company compte ${EMPLOYEES.length} employés.</p>
${renderTableHtml(tableData2, headerData2)}
<p>Tout ce beau nous coute ${total_cost} € par an (primes comprises).</p>
`.trim();