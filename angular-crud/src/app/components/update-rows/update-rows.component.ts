import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-update-rows',
  standalone: true,
  templateUrl: './update-rows.component.html',
})
export class UpdateRowsComponent {
  data: any[] = [];
  updateTime: number | null = null;

  constructor() {
    this.generateData();
  }

  generateData() {
    this.data = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    }));
  }

  updateRows() {
    const startTime = performance.now();
    for (let i = 0; i < 100; i++) {
      const randomIndex = Math.floor(Math.random() * this.data.length);
      this.data[randomIndex] = {
        ...this.data[randomIndex],
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      };
    }
    const endTime = performance.now();
    this.updateTime = endTime - startTime;
  }
}
