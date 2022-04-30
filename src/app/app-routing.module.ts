import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AdminPageComponent} from "./admin/admin-page/admin-page.component";

export const routes: Routes = [
  // {
  //   path: "",
  //   component: AdminLayout,
  //   children: [
      // {
      //   path: "",
      //   loadChildren: () =>
      //     import("@/modules/dashboard").then(m => m.DashboardModule),
      //   canActivate: [MenuGuard],
      // },
      // {
      //   path: "investigation",
      //   loadChildren: () =>
      //     import("@/modules/investigation").then(m => m.InvestigationModule),
      //   canActivate: [MenuGuard],
      // },
      // {
      //   path: "investigation",
      //   redirectTo: "investigation/process-analysis",
      //   pathMatch: "full",
      // },
      // {
      //   path: "settings/rules/rules-correlation-debug",
      //   loadChildren: () =>
      //     import("@/modules/setting").then(m => m.SettingModule),
      //   canActivate: [MenuGuard],
      // },
      // {
      //   path: "alert",
      //   redirectTo: "alert/alert-management",
      //   pathMatch: "full",
      // },
      // {
      //   path: "alert/alert-management",
      //   loadChildren: () => import("@/modules/alert").then(m => m.AlertModule),
      //   canActivate: [MenuGuard],
      // },
  //   ],
  // },
  {
    path: "",
    redirectTo: "admin",
    pathMatch: "full",
  },
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "admin",
    component: AdminPageComponent,
  },
  // { path: "**", canActivate: [MenuGuard], component: NotFound },
];
