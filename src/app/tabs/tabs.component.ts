import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ComicCollectionComponent } from './comic-collection/comic-collection.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

interface Tab {
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  //turn dynamic/take info from imported component
  tabs: Tab[] = [
    {
      title: 'About Me',
      component: AboutMeComponent,
    },
    {
      title: 'Projects',
      component: ProjectsComponent,
    },
    {
      title: 'Comic Collection',
      component: ComicCollectionComponent,
    },
    {
      title: 'Contact',
      component: ContactComponent,
    },
  ];
  activeTab: Tab | null = null;

  selectTab(tab: Tab) {
    this.activeTab = this.activeTab === tab ? null : tab;
  }
}
