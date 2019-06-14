export class Tarea {
    constructor(private _id: number, private _nombre: string, private _completa: boolean = false) { }

    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }
    set nombre(val: string) {
        this._nombre = val;
    }

    get completa(): boolean {
        return this._completa;
    }
    set completa(val: boolean) {
        this._completa = val;
    }
}


