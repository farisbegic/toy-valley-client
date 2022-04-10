import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import { MainComponent } from "./features/common/main/main.component";
import { HomeComponent } from "./features/home/components/home/home.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {Route} from "./constants/route.constants";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        children: [
          {
            path: Route.REGISTER,
            component: RegistrationComponent,
          }
        ]
      },
    ]
  }
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
