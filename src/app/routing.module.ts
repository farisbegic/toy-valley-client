import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import { MainComponent } from "./features/common/main/main.component";
import { HomeComponent } from "./features/home/components/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {Route} from "./constants/route.constants";
import {
  CategoryViewContainerComponent
} from "./features/home/containers/category-view-container/category-view-container.component";
import {ResolverResponse} from "./constants/resolver-response.constants";
import {CategoryResolver} from "./resolvers/category.resolver";
import {
  CategoryListContainerComponent
} from "./features/home/containers/category-list-container/category-list-container.component";
import {CategoriesResolver} from "./resolvers/categories.resolver";

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
      },
      {
        path: Route.ID + Route.SEPARATOR + Route.CATEGORY,
        component: CategoryViewContainerComponent,
        resolve: {
          [ResolverResponse.CATEGORY]: CategoryResolver,
        }
      },
      {
        path: Route.CATEGORIES,
        component: CategoryListContainerComponent,
        resolve: {
          [ResolverResponse.CATEGORIES]: CategoriesResolver,
        }
      },
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
