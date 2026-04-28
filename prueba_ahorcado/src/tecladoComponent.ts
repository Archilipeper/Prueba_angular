import { Component, output, input } from "@angular/core";

@Component({
    selector: "teclado",
    templateUrl: "./teclado.component.html"})
export class TecladoComponent {
    public palabraSecreta = input<string>();
    public cantidadFallos = output<number>();
    public letra: string = "";
    public fallos: number = 0;

    public verificarLetra(letra: string): void {
        this.letra = letra;
        if (letra in this.palabraSecreta) {
            // La letra es correcta, no se incrementa la cantidad de fallos
        } else {
            // La letra es incorrecta, se incrementa la cantidad de fallos
            this.fallos++;
            this.cantidadFallos.emit(this.fallos);
        }
    }
}