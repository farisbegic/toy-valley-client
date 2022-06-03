import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./features/common/main/main.component";
import { HomeComponent } from "./features/home/components/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {Route} from "./constants/route.constants";
import {CategoryViewContainerComponent} from "./features/categories/containers/category-view-container/category-view-container.component";
import {CategoryResolver} from "./resolvers/category.resolver";
import {CategoryListContainerComponent} from "./features/categories/containers/category-list-container/category-list-container.component";
import {CategoriesResolver} from "./resolvers/categories.resolver";
import {ToysComponent} from "./features/toys/components/toys/toys.component";
import {ResolverResponse} from "./constants/resolver-response.constants";
import {ToysResolver} from "./resolvers/toys.resolver";
import {CitiesResolver} from "./resolvers/cities.resolver";
import {
  RegistrationContainerComponent
} from "./features/registration/containers/registration-container/registration-container.component";
import {PageNotFoundComponent} from "./features/common/page-not-found/page-not-found.component";
import {TopTradersResolver} from "./resolvers/top-traders.resolver";
import {AuthorizedGuard} from './guards/authorized.guard';
import {LoginComponent} from './features/common/login/login.component';


const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        resolve: {
          [ResolverResponse.TOP_TRADERS]: TopTradersResolver
        }
      },
      {
        path: Route.REGISTER,
        component: RegistrationContainerComponent,
        resolve: {
          [ResolverResponse.CITIES]: CitiesResolver,
        }
      },
      {
        path: Route.LOGIN,
        component: LoginComponent,
      },
      {
        path: Route.ID + Route.SEPARATOR + Route.CATEGORY,
        canActivateChild: [AuthorizedGuard],
        component: CategoryViewContainerComponent,
        resolve: {
          [ResolverResponse.CATEGORY]: CategoryResolver,
        }
      },
      {
        path: Route.CATEGORIES,
        canActivateChild: [AuthorizedGuard],
        component: CategoryListContainerComponent,
        resolve: {
          [ResolverResponse.CATEGORIES]: CategoriesResolver,
        }
      },
      {
        path: Route.TOYS,
        canActivateChild: [AuthorizedGuard],
        children: [
          {
            path: Route.ID,
            component: ToysComponent,
            resolve: {
              [ResolverResponse.TOYS]: ToysResolver
            }
          }
        ]
      }
      ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
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
