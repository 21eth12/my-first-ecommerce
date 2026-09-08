import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Laces } from './laces/laces';
import { ShoesAndBags } from './shoes-and-bags/shoes-and-bags';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Laces, ShoesAndBags],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-ecommerce');
}