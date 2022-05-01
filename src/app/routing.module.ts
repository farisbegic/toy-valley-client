import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import { MainComponent } from "./features/common/main/main.component";
import { HomeComponent } from "./features/home/components/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {RegistrationComponent} from "./features/registration/components/registration.component";
import {Route} from "./constants/route.constants";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: Route.REGISTER,
        component: RegistrationComponent,
      },
      {
        path: Route.LOGIN,
        component: LoginComponent,
      }
      ]
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
