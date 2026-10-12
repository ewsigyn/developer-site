import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Comic {
  id: number;
  title: string;
  image: string;
  year: number;
}

@Component({
  selector: 'app-comic-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comic-collection.component.html',
  styleUrls: ['./comic-collection.component.scss'],
})
export class ComicCollectionComponent implements OnInit {
  comics: Comic[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadComics();
  }

  loadComics() {
    this.http.get<Comic[]>('assets/comics.json').subscribe({
      next: (data) => {
        this.comics = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading comics:', err);
        this.error = 'Failed to load comics';
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
