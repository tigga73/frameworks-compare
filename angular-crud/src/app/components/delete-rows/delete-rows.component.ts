import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-delete-rows',
  standalone: true,
  templateUrl: './delete-rows.component.html',
})
export class DeleteRowsComponent {
  data: any[] = [];
  deletionTime: number | null = null;

  constructor() {
    this.generateData();
  }

  generateData() {
    this.data = Array.from({ length: 10000 }, (_, i) => ({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    }));
  }

  deleteRows() {
    const startTime = performance.now();

    // Remove as primeiras 1.000 linhas
    this.data = this.data.slice(1000);

    const endTime = performance.now();
    this.deletionTime = endTime - startTime;
  }
}
