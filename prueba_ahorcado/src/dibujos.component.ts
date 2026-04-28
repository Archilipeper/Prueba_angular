import { Component, input } from "@angular/core";

@Component({
    selector: "dibujos",
    templateUrl: "./dibujos.component.html"})
export class DibujosComponent {
    public imagen: string = "";
    public numFallas = input<number>(0);
    
    public mostrarDibujo(numFallas: number): string {
        if (numFallas === 0) {
            this.imagen = "";
        } else if (numFallas === 1) {
            this.imagen = "/Users/gagair/Prueba_angular/prueba_ahorcado/src/Dibujos Ahorcado/Dibujos Ahorcado 1.png";
        } else if (numFallas === 2) {
            this.imagen = "/Users/gagair/Prueba_angular/prueba_ahorcado/src/Dibujos Ahorcado/Dibujos Ahorcado 2.png";
        } else if (numFallas === 3) {
            this.imagen = "/Users/gagair/Prueba_angular/prueba_ahorcado/src/Dibujos Ahorcado/Dibujos Ahorcado 3.png";
        } else if (numFallas === 4) {
            this.imagen = "/Users/gagair/Prueba_angular/prueba_ahorcado/src/Dibujos Ahorcado/Dibujos Ahorcado 4.png";
        } else if (numFallas === 5) {
            this.imagen = "/Users/gagair/Prueba_angular/prueba_ahorcado/src/Dibujos Ahorcado/Dibujos Ahorcado 5.png";
        } else if (numFallas === 6) {
            this.imagen = "/Users/gagair/Prueba_angular/prueba_ahorcado/src/Dibujos Ahorcado/Dibujos Ahorcado 6.png";
        } else if (numFallas === 7) {
            this.imagen = "/Users/gagair/Prueba_angular/prueba_ahorcado/src/Dibujos Ahorcado/Dibujos Ahorcado 7.png";
        }
        return this.imagen;
    }
}