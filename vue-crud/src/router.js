import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import LoadRowsView from "./views/LoadRowsView.vue";
import UpdateRowsView from "./views/UpdateRowsView.vue";
import SelectRowView from "./views/SelectRowView.vue";
import EditRowView from "./views/EditRow.vue";
import CreateRowsView from "./views/CreateRowsView.vue";
import DeleteRowsView from "./views/DeleteRowsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/loadRows", component: LoadRowsView },
  { path: "/updateRows", component: UpdateRowsView },
  { path: "/selectRow", component: SelectRowView },
  { path: "/editRow", component: EditRowView },
  { path: "/createRows", component: CreateRowsView },
  { path: "/deleteRows", component: DeleteRowsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
