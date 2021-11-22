import { Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: `
    <h1>{{titulo}}<h1>
    <p>{{comentario}}</p>
    <p>{{year}}</p>
    `
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola qué tal";
        this.comentario = "Propiedad de comentario";
        this.year = 2021;

        console.log("Componente mi-componente cargado");
        console.log(this.titulo, this.comentario, this.year);
    }
}