import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h2>Hola Mundo</h2>
    <button (click)="acumular(+base)"> +{{base}} </button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)"> -{{base}} </button>
    `
})
export class contadorcomponent {
    title: string = 'bases';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}