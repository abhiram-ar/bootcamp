export class Item {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public quantity: number,
        public price: number,
        public createdAt?: Date,
        public updatedAt?: Date
    ) {}
}
