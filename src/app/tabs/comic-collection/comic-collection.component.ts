import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Comic {
  id: number;
  title: string;
  image: string;
  year: number;
}

@Component({
  selector: 'app-comic-collection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comic-collection.component.html',
  styleUrls: ['./comic-collection.component.scss'],
})
export class ComicCollectionComponent implements OnInit {
  comics: Comic[] = [];
  filteredComics: Comic[] = [];
  isLoading = true;
  error: string | null = null;
  searchQuery = '';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadComics();
  }

  loadComics() {
    this.http.get<Comic[]>('assets/comics.json').subscribe({
      next: (data) => {
        this.comics = data;
        this.filteredComics = data;
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

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.filteredComics = this.comics;
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredComics = this.comics.filter(
        (comic) =>
          comic.title.toLowerCase().includes(query) || comic.year.toString().includes(query),
      );
    }
  }
}
