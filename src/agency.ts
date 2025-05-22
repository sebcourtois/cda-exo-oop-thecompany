export class MealPolicy {
    static Canteen = new MealPolicy("Canteen");
    static Vouchers = new MealPolicy("Vouchers");
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString() {
        return `${this.name}`;
    }
}

export class Agency {
    name: string;
    lane: string;
    postalCode: number;
    city: string;
    mealPolicy: MealPolicy;

    constructor(
        name: string,
        lane: string,
        postalCode: number,
        city: string,
        mealPolicy: MealPolicy
    ) {
        this.name = name;
        this.lane = lane;
        this.postalCode = postalCode;
        this.city = city;
        this.mealPolicy = mealPolicy;
    }
}