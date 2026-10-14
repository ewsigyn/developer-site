import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  //be able to export title and content 
  //content be the html and the title be the name of the component
}