import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h2>Active Users</h2>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'testing-angular-app';
}
