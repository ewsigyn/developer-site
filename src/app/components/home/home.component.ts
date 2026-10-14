import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //be able to export title and content 
  //content be the html and the title be the name of the component
}