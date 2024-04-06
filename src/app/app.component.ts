import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule,HomeComponent],
  // templateUrl: './app.component.html',
  // template: `<h1>Hello World!</h1>`,
  template: ` <main>
    <header class="brand-name">
    <a routerLink="/">
    <img
      class="brand-logo"
      src="/assets/logo.svg"
      alt="logo"
      aria-hidden="true"
    />
    </a>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
