import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoadRowsComponent } from './components/load-rows/load-rows.component';
import { UpdateRowsComponent } from './components/update-rows/update-rows.component';
import { SelectRowComponent } from './components/select-row/select-row.component';
import { EditRowComponent } from './components/edit-row/edit-row.component';
import { CreateRowsComponent } from './components/create-rows/create-rows.component';
import { DeleteRowsComponent } from './components/delete-rows/delete-rows.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loadRows', component: LoadRowsComponent },
  { path: 'updateRows', component: UpdateRowsComponent },
  { path: 'selectRow', component: SelectRowComponent },
  { path: 'editRow', component: EditRowComponent },
  { path: 'createRows', component: CreateRowsComponent },
  { path: 'deleteRows', component: DeleteRowsComponent },
];
