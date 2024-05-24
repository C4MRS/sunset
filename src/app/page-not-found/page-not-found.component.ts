import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  standalone: true,
  imports: [],
  templateUrl: "./page-not-found.component.html",
  styleUrl: "./page-not-found.component.css",
})
export class PageNotFoundComponent {
  //Method to simply go back to the main component
  goBack(): void {
    window.location.href = "/";
  }
}
