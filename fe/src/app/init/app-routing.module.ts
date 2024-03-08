import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { 
    path: "",
    title: "Hudagon - Tranh chủ",
    loadChildren: () => import("../features/landing-page/landing-page.module").then(m => m.LandingPageModule)
  },
  {
    path: "list",
    title: "Hudagon - Trang sản phẩm",
    loadChildren: () => import("../features/list-page/list-page.module").then(m => m.ListPageModule)
  },
  {
    path: "error",
    title: "Hudagon - Trang lỗi",
    loadChildren: () => import("../features/error-page/error-page.module").then(m => m.ErrorPageModule)
  },
  { path: "**", redirectTo: "/error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
