import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-create-rows',
  standalone: true,
  templateUrl: './create-rows.component.html',
})
export class CreateRowsComponent {
  data: any[] = [];
  creationTime: number | null = null;

  createRows() {
    const startTime = performance.now();
    this.data = Array.from({ length: 10000 }, (_, i) => ({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    }));
    const endTime = performance.now();
    this.creationTime = endTime - startTime;
  }
}
