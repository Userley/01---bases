import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Iroman', 'Spiderman', 'Hulk', 'Thor', 'Capitán América'];
  HeroeEliminado?: string;
  HeroeEstado: boolean = false;

  borrarHeroe(): void {

    this.HeroeEliminado = this.heroes.pop();
    this.HeroeEstado = this.heroes.length > 0
    console.log("Borrando...");
  }
}
