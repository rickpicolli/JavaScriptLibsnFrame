import { Component } from '@angular/core';
import memberData from '../../members.json';
import productsData from '../../products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-homework';
  Members: any = memberData;
  Products: any = productsData;
}
