import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Home } from './core/home/home';
import { Footer } from './core/footer/footer';
import { ConferanceList } from './core/conferance-list/conferance-list';

@Component({
  selector: 'app-root',
  imports: [Header,Home,Footer,ConferanceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstproject');
}
