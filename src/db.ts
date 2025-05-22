import {Employee} from "./employee.ts";
import {Agency} from "./agency";

function randomIndex(maxIndex: number) {
    return Math.floor(Math.random() * maxIndex)
}

export const AGENCIES: Agency[] = [
    new Agency(
        "Franchouillard Company - Paris Opéra",
        "10 Rue de la Paix",
        75002, // Paris
        "Paris",
    ),
    new Agency(
        "Franchouillard Company - Lyon Bellecour",
        "2 Place Bellecour",
        69002, // Lyon
        "Lyon",
    ),
    new Agency(
        "Franchouillard Company - Marseille Vieux-Port",
        "1 Quai du Port",
        13002, // Marseille
        "Marseille",
    ),
    new Agency(
        "Franchouillard Company - Bordeaux Saint-Pierre",
        "5 Rue du Parlement Sainte-Catherine",
        33000, // Bordeaux
        "Bordeaux",
    ),
    new Agency(
        "Franchouillard Company - Nice Promenade",
        "123 Promenade des Anglais",
        6000, // Nice
        "Nice",
    ),
    new Agency(
        "Franchouillard Company - Toulouse Capitole",
        "8 Place du Capitole",
        31000, // Toulouse
        "Toulouse",
    ),
    new Agency(
        "Franchouillard Company - Strasbourg Cathédrale",
        "3 Rue du Dôme",
        67000, // Strasbourg
        "Strasbourg",
    ),
    new Agency(
        "Franchouillard Company - Lille Grand Place",
        "17 Place du Général de Gaulle",
        59000, // Lille
        "Lille",
    ),
    new Agency(
        "Franchouillard Company - Nantes Bouffay",
        "4 Rue de la Fosse",
        44000, // Nantes
        "Nantes",
    ),
    new Agency(
        "Franchouillard Company - Rennes République",
        "1 Place de la République",
        35000, // Rennes
        "Rennes",
    ),
];

export const EMPLOYEES: Array<Employee> = [
    new Employee(
        "Alice",
        "Dupont",
        "2022-01-15",
        "Software Engineer",
        45.5,
        "Engineering",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Bob",
        "Martin",
        "2021-06-01",
        "Product Manager",
        60.0,
        "Product Development",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Claire",
        "Leroy",
        "2023-03-10",
        "UX Designer",
        42.0,
        "Design",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "David",
        "Garcia",
        "2020-09-20",
        "Senior Software Engineer",
        58.0,
        "Engineering",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Eve",
        "Dubois",
        "2024-02-01",
        "Human Resources Generalist",
        38.0,
        "Human Resources",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Frank",
        "Moreau",
        "2019-11-05",
        "Sales Manager",
        70.0,
        "Sales",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Grace",
        "Leroy",
        "2022-07-25",
        "Marketing Specialist",
        40.0,
        "Marketing",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Henri",
        "Roux",
        "2021-04-12",
        "Financial Analyst",
        50.0,
        "Finance",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Isabelle",
        "Thomas",
        "2023-09-01",
        "Data Scientist",
        55.0,
        "Data Science",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
    new Employee(
        "Julien",
        "Bernard",
        "2020-03-01",
        "IT Support Specialist",
        35.0,
        "IT",
        AGENCIES[randomIndex(AGENCIES.length)],
    ),
];
