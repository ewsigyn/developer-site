import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';

@Component({
  imports: [RouterOutlet, TabsComponent, HomeComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('developer-site');
}
