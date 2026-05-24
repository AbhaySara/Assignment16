import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { StudentComponent } from './student/student';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, StudentComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

}