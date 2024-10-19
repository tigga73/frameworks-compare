import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-select-row',
  standalone: true,
  templateUrl: './select-row.component.html',
})
export class SelectRowComponent {
  data: any[] = [];
  selectedRow: any = null;
  selectionTime: number | null = null;

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

  selectRandomRow() {
    const startTime = performance.now();
    const randomIndex = Math.floor(Math.random() * this.data.length);
    this.selectedRow = this.data[randomIndex];
    const endTime = performance.now();
    this.selectionTime = endTime - startTime;
  }
}
