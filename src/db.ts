import {Employee} from "./employee.ts";
import {Agency, MealPolicy} from "./agency";

export const AGENCIES: Agency[] = [
    new Agency(
        "Franche Company - Paris Opéra",
        "10 Rue de la Paix",
        75002, // Paris
        "Paris",
        MealPolicy.Canteen,
    ),
    new Agency(
        "Franche Company - Lyon Bellecour",
        "2 Place Bellecour",
        69002, // Lyon
        "Lyon",
        MealPolicy.Vouchers,
    ),
    new Agency(
        "Franche Company - Marseille Vieux-Port",
        "1 Quai du Port",
        13002, // Marseille
        "Marseille",
        MealPolicy.Vouchers,
    ),
    new Agency(
        "Franche Company - Bordeaux Saint-Pierre",
        "5 Rue du Parlement Sainte-Catherine",
        33000, // Bordeaux
        "Bordeaux",
        MealPolicy.Vouchers,
    ),
    new Agency(
        "Franche Company - Nice Promenade",
        "123 Promenade des Anglais",
        6000, // Nice
        "Nice",
        MealPolicy.Canteen,
    ),
    new Agency(
        "Franche Company - Toulouse Capitole",
        "8 Place du Capitole",
        31000, // Toulouse
        "Toulouse",
        MealPolicy.Canteen,
    ),
    new Agency(
        "Franche Company - Strasbourg Cathédrale",
        "3 Rue du Dôme",
        67000, // Strasbourg
        "Strasbourg",
        MealPolicy.Canteen,
    ),
    new Agency(
        "Franche Company - Lille Grand Place",
        "17 Place du Général de Gaulle",
        59000, // Lille
        "Lille",
        MealPolicy.Vouchers,
    ),
    new Agency(
        "Franche Company - Nantes Bouffay",
        "4 Rue de la Fosse",
        44000, // Nantes
        "Nantes",
        MealPolicy.Vouchers,
    ),
    new Agency(
        "Franche Company - Rennes République",
        "1 Place de la République",
        35000, // Rennes
        "Rennes",
        MealPolicy.Canteen,
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
        AGENCIES[0],
    ),
    new Employee(
        "Bob",
        "Martin",
        "2021-06-01",
        "Product Manager",
        60.0,
        "Product Development",
        AGENCIES[1],
    ),
    new Employee(
        "Claire",
        "Leroy",
        "2023-03-10",
        "UX Designer",
        42.0,
        "Design",
        AGENCIES[2],
    ),
    new Employee(
        "David",
        "Garcia",
        "2020-09-20",
        "Senior Software Engineer",
        58.0,
        "Engineering",
        AGENCIES[3],
    ),
    new Employee(
        "Eve",
        "Dubois",
        "2024-02-01",
        "Human Resources Generalist",
        38.0,
        "Human Resources",
        AGENCIES[4],
    ),
    new Employee(
        "Frank",
        "Moreau",
        "2019-11-05",
        "Sales Manager",
        70.0,
        "Sales",
        AGENCIES[5],
    ),
    new Employee(
        "Grace",
        "Leroy",
        "2022-07-25",
        "Marketing Specialist",
        40.0,
        "Marketing",
        AGENCIES[6],
    ),
    new Employee(
        "Henri",
        "Roux",
        "2021-04-12",
        "Financial Analyst",
        50.0,
        "Finance",
        AGENCIES[7],
    ),
    new Employee(
        "Isabelle",
        "Thomas",
        "2023-09-01",
        "Data Scientist",
        55.0,
        "Data Science",
        AGENCIES[8],
    ),
    new Employee(
        "Julien",
        "Bernard",
        "2020-03-01",
        "IT Support Specialist",
        35.0,
        "IT",
        AGENCIES[9],
    ),
];
