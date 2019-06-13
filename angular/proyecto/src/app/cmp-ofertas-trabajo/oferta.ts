export class Oferta {
    constructor(private _titulo: string, private _descripcion: string, private _logo: string) { }

    get titulo(): string {
        return this._titulo;
    }
    set titulo(val: string) {
        this._titulo = val;
    }
    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(val: string) {
        this._descripcion = val;
    }

    get logo(): string {
        return this._logo;
    }

    set logo(val: string) {
        this._logo = val;
    }
}


