import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {RoutingModule} from './routing.module';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

import {HeaderComponent} from './features/common/header/header.component';
import {MainComponent} from './features/common/main/main.component';
import {HomeComponent} from "./features/home/components/home/home.component";
import {SearchBarContainerComponent} from "./features/home/containers/search-bar-container/search-bar-container.component";
import {SearchBarComponent} from "./features/home/components/search-bar/search-bar.component";
import {TopCategoriesComponent} from './features/home/components/top-categories/top-categories.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {CardComponent} from './features/common/card/card.component';
import {TopTradersComponent} from './features/home/components/top-traders/top-traders.component';
import {TopTradersContainerComponent} from './features/home/containers/top-traders-container/top-traders-container.component';
import {MatTableModule} from "@angular/material/table";
import {TopChipsComponent} from "./features/common/top-chips/top-chips.component";
import {TopLocationsComponent} from './features/home/components/top-locations/top-locations.component';
import {FooterComponent} from './features/common/footer/footer.component';
import {RegistrationComponent} from './features/registration/components/registration.component';
import {LoginComponent} from './features/login/login.component';
import {CategoryListContainerComponent} from "./features/categories/containers/category-list-container/category-list-container.component";
import {CategoryListComponent} from "./features/categories/components/category-list/category-list.component";
import {CategoryToysComponent} from './features/toys/components/category-toys/category-toys.component';
import {CategoryToysResolver} from "./resolvers/category-toys.resolver";
import {ToysService} from "./services/toys.service";
import {HttpClientModule} from "@angular/common/http";
import {ToysViewContainerComponent} from './features/toys/containers/toys-view-container/toys-view-container.component';
import {ToysViewComponent} from './features/toys/components/toys-view/toys-view.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {RegistrationContainerComponent} from './features/registration/containers/registration-container/registration-container.component';
import {CityService} from "./services/city.service";
import {CitiesResolver} from "./resolvers/cities.resolver";
import {TopTradersResolver} from "./resolvers/top-traders.resolver";
import { PageNotFoundComponent } from './features/common/page-not-found/page-not-found.component';


import { LocationToysComponent } from './features/toys/components/location-toys/location-toys.component';
import {LocationToysResolver} from "./resolvers/location-toys.resolver";
import { ToyComponent } from './features/toy/components/toy/toy.component';
import { ToyContainerComponent } from './features/toy/containers/toy-container/toy-container.component';
import {ToyDetailResolver} from "./resolvers/toy-detail.resolver";
import { ToyInformationComponent } from './features/toy/components/toy-information/toy-information.component';
import {MatListModule} from "@angular/material/list";
import { TraderInformationComponent } from './features/toy/components/trader-information/trader-information.component';
import { ExchangeRequestDialogComponent } from './features/toy/components/exchange-request-dialog/exchange-request-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {UserToysResolver} from "./resolvers/user-toys.resolver";
import {ToyExchangeService} from "./services/toy-exchange.service";
import {provideAuthorizationInterceptor} from './interceptors/authorization.interceptor';
import {AuthorizedGuard} from './guards/authorized.guard';
import {AuthService} from './services/auth.service';
import {GenderToysComponent} from "./features/toys/components/gender-toys/gender-toys.component";
import {ConditionToysComponent} from "./features/toys/components/condition-toys/condition-toys.component";
import {GenderToysResolver} from "./resolvers/gender-toys.resolver";
import {ConditionToysResolver} from "./resolvers/condition-toys.resolver";
import {CategoryComponent} from "./features/categories/components/category/category.component";
import {GenderComponent} from "./features/categories/components/gender/gender.component";
import {ConditionComponent} from "./features/categories/components/condition/condition.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    SearchBarContainerComponent,
    SearchBarComponent,
    TopCategoriesComponent,
    CardComponent,
    TopTradersComponent,
    TopTradersContainerComponent,
    TopTradersComponent,
    TopChipsComponent,
    TopLocationsComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    CategoryListContainerComponent,
    CategoryListComponent,
    CategoryToysComponent,
    ToysViewContainerComponent,
    ToysViewComponent,
    RegistrationContainerComponent,
    PageNotFoundComponent,
    LocationToysComponent,
    ToyComponent,
    ToyContainerComponent,
    ToyInformationComponent,
    TraderInformationComponent,
    ExchangeRequestDialogComponent,
    GenderToysComponent,
    ConditionToysComponent,
    CategoryComponent,
    GenderComponent,
    ConditionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatChipsModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    MatGridListModule,
    MatOptionModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [
    provideAuthorizationInterceptor(),
    AuthorizedGuard,
    AuthService,
    CategoryToysResolver,
    UserToysResolver,
    LocationToysResolver,
    ToyDetailResolver,
    ToysService,
    ToyExchangeService,
    CitiesResolver,
    CityService,
    TopTradersResolver,
    GenderToysResolver,
    ConditionToysResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
