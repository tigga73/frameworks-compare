import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-load-rows',
  standalone: true,
  imports: [],
  templateUrl: './load-rows.component.html',
  styleUrl: './load-rows.component.css',
})
export class LoadRowsComponent {
  data: any[] = [];
  loadingTime: number | null = null;

  loadRows() {
    const startTime = performance.now();
    this.data = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    }));
    const endTime = performance.now();
    this.loadingTime = endTime - startTime;
  }
}
