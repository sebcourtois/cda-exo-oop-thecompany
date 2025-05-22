export class Agency {
    name: string;
    lane: string;
    postalCode: number;
    city: string;

    constructor(
        name: string,
        lane: string,
        postalCode: number,
        city: string,
    ) {
        this.name = name;
        this.lane = lane;
        this.postalCode = postalCode;
        this.city = city;
    }
}