import "./style.css";
import {EMPLOYEES} from "./db.ts";
import type {Employee, HolidayVouchers} from "./employee.ts";

function htmlToElement(html: string) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild as HTMLElement;
}

function renderRowElem(rowData: Array<any>) {
    const html = `
    <tr>
    ${rowData.map(value => `<td>${value}</td>`).join("\n")}
    </tr>
    `.trim();
    return htmlToElement(html);
}

const total_cost = EMPLOYEES
    .map((e) => e.annualGrossSalary + e.computeAnnualBonus())
    .reduce((accum, value) => accum + value, 0);

const appDiv = document.querySelector("#app")!;
appDiv.innerHTML = `
<p>La Franche Company</p>
<table>
    <tbody id="employees_table_body1">
    </tbody>
</table>
<p>La Franche Company compte ${EMPLOYEES.length} employés</p>
<table>
    <tbody id="employees_table_body2">
    </tbody>
</table>
<p>Tout ce beau nous coute ${total_cost} € par an (primes comprises)</p>
`.trim();

function formatHolidayVouchers(vouchersMap: HolidayVouchers): string {
    return Array.from(vouchersMap.entries())
        .map((items) => `${items[1]}×${items[0]}`)
        .join("+");
}

function renderTable(employees: Employee[], targetTableBody: HTMLElement) {
    for (let employee of employees) {
        targetTableBody.appendChild(renderRowElem([
            employee.agency.name,
            employee.agency.mealPolicy.name,
            employee.department,
            employee.lastName.toUpperCase(),
            employee.firstName,
            employee.jobTitle,
            employee.dateHired.toISOString().split("T", 2)[0],
            employee.seniority(),
            employee.annualGrossSalary,
            employee.computeAnnualBonus().toFixed(2),
            employee.canGetHolidayVouchers() ? "Yes" : "No",
            formatHolidayVouchers(employee.computeChristmasVouchers(new Date().getFullYear())),
        ]));
    }
}

const sortedEmployees = [...EMPLOYEES];
sortedEmployees.sort((e1, e2) => {
    if (e1.fullName() === e2.fullName()) return 0;
    return (e1.fullName() > e2.fullName()) ? 1 : -1;
});
renderTable(
    sortedEmployees,
    document.querySelector("#employees_table_body1")!,
);

sortedEmployees.sort((e1, e2) => {
    const s1 = e1.department + e1.fullName();
    const s2 = e2.department + e2.fullName();
    if (s1 === s2) return 0;
    return (s1 > s2) ? 1 : -1;
});
renderTable(
    sortedEmployees,
    document.querySelector("#employees_table_body2")!,
);
