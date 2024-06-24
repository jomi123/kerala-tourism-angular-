import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CardComponent } from "./components/card/card.component";
import { LoginComponent } from "./pages/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, CardComponent, LoginComponent]
})
export class AppComponent {
  title = 'kerala-tourism';
}
