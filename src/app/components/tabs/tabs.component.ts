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
    this.activeTab = tab;
  }

  closeTab() {
    this.activeTab = null;
  }
}
