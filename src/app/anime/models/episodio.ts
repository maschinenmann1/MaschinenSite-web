export class Episodio {
    public number: number;
    public name: string;
    public url: string[];

    constructor(obj: object) {
        this.number = Number(obj['number']) || NaN;
        this.name = obj['name'] || "";
        this.url = obj['url'] || "";

    }

}