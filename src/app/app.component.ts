import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputFieldComponent } from "./input-field/input-field.component";
import { CollapsibleRegisterComponent } from "./collapsible-register/collapsible-register.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InputFieldComponent, CollapsibleRegisterComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do-App';
}
