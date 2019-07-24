export class TodoClass {

    public id: number;
    public nombre: string;
    public completed: boolean;

    constructor(nombre: string){
        this.id = Math.random();
        this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        this.completed = false;
    }
}
