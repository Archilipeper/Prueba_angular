import { Component, output } from "@angular/core";

@Component({
    selector: "palabra",
    templateUrl: "./palabra.component.html"})
export class PalabraComponent {
    public palabra = output<string>();

    constructor() {
        this.palabra.emit("Biologia");
    }
}