import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-edit-row',
  standalone: true,
  templateUrl: './edit-row.component.html',
})
export class EditRowComponent {
  data: any[] = [];
  editedRow: any = null;
  editTime: number | null = null;

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

  editRandomRow() {
    const startTime = performance.now();
    const randomIndex = Math.floor(Math.random() * this.data.length);
    this.data[randomIndex] = {
      ...this.data[randomIndex],
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    };
    this.editedRow = this.data[randomIndex];
    const endTime = performance.now();
    this.editTime = endTime - startTime;
  }
}
