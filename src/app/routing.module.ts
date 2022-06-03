import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./features/common/main/main.component";
import { HomeComponent } from "./features/home/components/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {RegistrationComponent} from "./features/registration/components/registration.component";
import {Route} from "./constants/route.constants";
import {CategoryViewContainerComponent} from "./features/categories/containers/category-view-container/category-view-container.component";
import {CategoryResolver} from "./resolvers/category.resolver";
import {CategoryListContainerComponent} from "./features/categories/containers/category-list-container/category-list-container.component";
import {CategoriesResolver} from "./resolvers/categories.resolver";
import {CategoryToysComponent} from "./features/toys/components/category-toys/category-toys.component";
import {ResolverResponse} from "./constants/resolver-response.constants";
import {CategoryToysResolver} from "./resolvers/category-toys.resolver";
import {CitiesResolver} from "./resolvers/cities.resolver";
import {RegistrationContainerComponent} from "./features/registration/containers/registration-container/registration-container.component";
import {EditProfileContainerComponent} from "./features/edit-profile/containers/edit-profile-container.component";
import {UserResolver} from "./resolvers/user.resolver";
import {PageNotFoundComponent} from "./features/common/page-not-found/page-not-found.component";
import {TopTradersResolver} from "./resolvers/top-traders.resolver";
import {LocationToysComponent} from "./features/toys/components/location-toys/location-toys.component";
import {LocationToysResolver} from "./resolvers/location-toys.resolver";

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
      {
        path: Route.TOYS,
        children: [
          {
            path: Route.CATEGORY + Route.SEPARATOR + Route.ID,
            component: CategoryToysComponent,
            resolve: {
              [ResolverResponse.TOYS]: CategoryToysResolver
            }
          },
          {
            path: Route.CITY + Route.SEPARATOR + Route.ID,
            component: LocationToysComponent,
            resolve: {
              [ResolverResponse.TOYS]: LocationToysResolver
            }
          }
        ]
      },
      {
        path: Route.USERS,
        children: [
          {
            path: Route.ID + Route.SEPARATOR + Route.EDIT,
            component: EditProfileContainerComponent,
            resolve: {
              [ResolverResponse.USER]: UserResolver,
              [ResolverResponse.CITIES]: CitiesResolver,
            }
          }
        ]
      },
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
