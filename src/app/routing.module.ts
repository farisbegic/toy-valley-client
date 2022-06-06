import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./features/common/main/main.component";
import { HomeComponent } from "./features/home/components/home/home.component";
import {Route} from "./constants/route.constants";
import {CategoriesResolver} from "./resolvers/categories.resolver";
import {CategoryToysComponent} from "./features/toys/components/category-toys/category-toys.component";
import {ResolverResponse} from "./constants/resolver-response.constants";
import {CategoryToysResolver} from "./resolvers/category-toys.resolver";
import {CitiesResolver} from "./resolvers/cities.resolver";
import {
  RegistrationContainerComponent
} from "./features/registration/containers/registration-container/registration-container.component";
import {PageNotFoundComponent} from "./features/common/page-not-found/page-not-found.component";
import {TopTradersResolver} from "./resolvers/top-traders.resolver";


import {LocationToysComponent} from "./features/toys/components/location-toys/location-toys.component";
import {LocationToysResolver} from "./resolvers/location-toys.resolver";
import {ToyComponent} from "./features/toy/components/toy/toy.component";
import {ToyDetailResolver} from "./resolvers/toy-detail.resolver";
import {UserToysResolver} from "./resolvers/user-toys.resolver";

import {LoginComponent} from './features/login/login.component';
import {GenderToysComponent} from "./features/toys/components/gender-toys/gender-toys.component";
import {ConditionToysUsedResolver} from "./resolvers/condition-toys-used.resolver";
import {ConditionToysComponent} from "./features/toys/components/condition-toys/condition-toys.component";
import {CategoryComponent} from "./features/categories/components/category/category.component";

import {DashboardComponent} from "./features/dashboard/components/dashboard/dashboard.component";
import {DashboardCityContainerComponent} from "./features/dashboard/containers/dashboard-city-container/dashboard-city-container.component";
import {DashboardCategoryContainerComponent} from "./features/dashboard/containers/dashboard-category-container/dashboard-category-container.component";
import {AddCityContainerComponent} from "./features/dashboard/containers/add-city-container/add-city-container.component";
import {AddCategoryContainerComponent} from "./features/dashboard/containers/add-category-container/add-category-container.component";
import {GenderToysResolverFemale} from "./resolvers/gender-toys-female.resolver";
import {GenderToysResolverMale} from "./resolvers/gender-toys-male.resolver";
import {GenderToysResolverUnisex} from "./resolvers/gender-toys-unisex.resolver";
import {ConditionToysBrandNewResolver} from "./resolvers/condition-toys-brand-new.resolver";


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
        path: Route.CATEGORIES,
        children: [
          {
            path: "",
            component: CategoryComponent,
            resolve: {
              [ResolverResponse.CATEGORIES]: CategoriesResolver
            }
          },
          {
            path: Route.GENDER + Route.SEPARATOR + Route.FEMALE,
            component: GenderToysComponent,
            resolve: {
              [ResolverResponse.CATEGORIES]: GenderToysResolverFemale
            }
          },
          {
            path: Route.GENDER + Route.SEPARATOR + Route.MALE,
            component: GenderToysComponent,
            resolve: {
              [ResolverResponse.CATEGORIES]: GenderToysResolverMale
            }
          },
          {
            path: Route.GENDER + Route.SEPARATOR + Route.UNISEX,
            component: GenderToysComponent,
            resolve: {
              [ResolverResponse.CATEGORIES]: GenderToysResolverUnisex
            }
          },
          {
            path: Route.CONDITION + Route.SEPARATOR + Route.ID,
            component: ConditionToysComponent,
            resolve: {
              [ResolverResponse.CATEGORIES]: ConditionToysUsedResolver
            }
          },
          {
            path: Route.CONDITION + Route.SEPARATOR + Route.ID,
            component: ConditionToysComponent,
            resolve: {
              [ResolverResponse.CATEGORIES]: ConditionToysBrandNewResolver
            }
          }
        ]
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
        path: Route.TOY + Route.SEPARATOR + Route.ID,
        component: ToyComponent,
        resolve: {
          [ResolverResponse.TOY]: ToyDetailResolver,
          [ResolverResponse.USER + ResolverResponse.SEPARATOR + ResolverResponse.TOY]: UserToysResolver
        }
      },
      {
        path: Route.DASHBOARD,
        children: [
          {
            path: "",
            component: DashboardComponent
          },
          {
            path: Route.CITY,
            children: [
              {
                path: Route.EMPTY,
                component: DashboardCityContainerComponent,
                resolve: {
                  [ResolverResponse.CITIES]: CitiesResolver
                }
              },
              {
                path: Route.ADD,
                component: AddCityContainerComponent
              },
            ]
          },
          {
            path: Route.CATEGORY,
            children: [
              {
                path: Route.EMPTY,
                component: DashboardCategoryContainerComponent,
                resolve: {
                  [ResolverResponse.CATEGORIES]: CategoriesResolver
                }
              },
              {
                path: Route.ADD,
                component: AddCategoryContainerComponent
              }
            ]
          }
        ]
      },
      ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];


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

export class RoutingModule {
}
