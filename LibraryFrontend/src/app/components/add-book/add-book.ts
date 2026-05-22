import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.html'
})
export class AddBookComponent {
  private bookService = inject(BookService);

  newBook: Book = {
    title: '',
    author: '',
    isbn: '',
    genre: '',
    available: true
  };

  saveBook(): void {
    if (!this.newBook.title || !this.newBook.author) {
      alert('Error: Book Title and Author are required!');
      return;
    }

    this.bookService.addBook(this.newBook).subscribe({
      next: (response) => {
        alert('Success! The book has been added to the library catalog.');
        // Reset form
        this.newBook = { title: '', author: '', isbn: '', genre: '', available: true };
      },
      error: (err) => {
        console.error('Backend Error:', err);
        alert('Failed to save book. Make sure Spring Boot is running on port 8080.');
      }
    });
  }
}