import "./style.css";
import {EMPLOYEES} from "./db.ts";
import type {Employee} from "./employee.ts";

function htmlToElement(html: string) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild as HTMLElement;
}

function renderRowElem(rowData: Array<any>) {
    const html = `
    <tr>
    ${rowData.map(value => `<td>${value}</td>`)}
    </tr>
    `.trim();
    return htmlToElement(html);
}

const total_cost = EMPLOYEES
    .map((e) => e.annualGrossSalary + e.computeAnnualBonus())
    .reduce((accum, value) => accum + value, 0);

const appDiv = document.querySelector("#app")!;
appDiv.innerHTML = `
<p>La Franchouillard Company compte ${EMPLOYEES.length} employés</p>
<table>
    <tbody id="employees_table_body1">
    </tbody>
</table>
<p>La Franchouillard Company compte toujours ${EMPLOYEES.length} employés</p>
<table>
    <tbody id="employees_table_body2">
    </tbody>
</table>
<p>Tout ce beau nous coute ${total_cost} € par an</p>
`.trim();


function renderTable1(employees: Employee[]) {
    const tableBody = document.querySelector("#employees_table_body1")!;

    for (let employee of employees) {
        tableBody.appendChild(renderRowElem([
            employee.agency.name,
            employee.lastName,
            employee.firstName,
            employee.jobTitle,
            employee.department,
            employee.dateHired.toISOString().split("T", 2)[0],
            employee.seniority(),
            employee.annualGrossSalary,
            employee.computeAnnualBonus().toFixed(2),
        ]));
    }
}

function renderTable2(employees: Employee[]) {
    const tableBody = document.querySelector("#employees_table_body2")!;
    for (let employee of employees) {
        tableBody.appendChild(renderRowElem([
            employee.agency.name,
            employee.department,
            employee.lastName,
            employee.firstName,
            employee.jobTitle,
            employee.dateHired.toISOString().split("T", 2)[0],
            employee.seniority(),
            employee.annualGrossSalary,
            employee.computeAnnualBonus().toFixed(2),
        ]));
    }
}

const sortedEmployees = [...EMPLOYEES];
sortedEmployees.sort((e1, e2) => {
    if (e1.fullName() === e2.fullName()) return 0;
    return (e1.fullName() > e2.fullName()) ? 1 : -1;
});
renderTable1(sortedEmployees);

sortedEmployees.sort((e1, e2) => {
    const s1 = e1.department + e1.fullName();
    const s2 = e2.department + e2.fullName();
    if (s1 === s2) return 0;
    return (s1 > s2) ? 1 : -1;
});
renderTable2(sortedEmployees);





