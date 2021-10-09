import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { contadorcomponent } from './contador/contador.component';



@NgModule({
    declarations: [
        contadorcomponent
    ],
    exports: [
        contadorcomponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule {

}