import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RoutingModule } from './routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeaderComponent } from './features/common/header/header.component';
import { MainComponent } from './features/common/main/main.component';
import { HomeComponent } from "./features/home/components/home/home.component";
import { SearchBarContainerComponent } from "./features/home/containers/search-bar-container/search-bar-container.component";
import { SearchBarComponent } from "./features/home/components/search-bar/search-bar.component";
import { TopCategoriesComponent } from './features/home/components/top-categories/top-categories.component';
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { CardComponent } from './features/common/card/card.component';
import { TopTradersComponent } from './features/home/components/top-traders/top-traders.component';
import { TopTradersContainerComponent } from './features/home/containers/top-traders-container/top-traders-container.component';
import { MatTableModule } from "@angular/material/table";
import { TopChipsComponent } from "./features/common/top-chips/top-chips.component";
import { TopLocationsComponent } from './features/home/components/top-locations/top-locations.component';
import { FooterComponent } from './features/common/footer/footer.component';
import { RegistrationComponent } from './features/registration/components/registration.component';
import { LoginComponent } from './features/login/login.component';
import {CategoryListContainerComponent} from "./features/categories/containers/category-list-container/category-list-container.component";
import {CategoryViewContainerComponent} from "./features/categories/containers/category-view-container/category-view-container.component";
import {CategoryViewComponent} from "./features/categories/components/category-view/category-view.component";
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
import {UserService} from "./services/user.service";
import {CategoriesResolver} from "./resolvers/categories.resolver";
import {CategoryService} from "./services/category.service";
import { EditProfileComponent } from './features/edit-profile/components/edit-profile.component';
import { EditProfileContainerComponent } from './features/edit-profile/containers/edit-profile-container.component';
import {UserResolver} from "./resolvers/user.resolver";
import {TopTradersResolver} from "./resolvers/top-traders.resolver";
import { PageNotFoundComponent } from './features/common/page-not-found/page-not-found.component';
import { LocationToysComponent } from './features/toys/components/location-toys/location-toys.component';
import {LocationToysResolver} from "./resolvers/location-toys.resolver";
import { ProfileComponent } from './features/profile/components/profile.component';
import { ProfileContainerComponent } from './features/profile/containers/profile-container.component';

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
    CategoryViewContainerComponent,
    CategoryViewComponent,
    CategoryListComponent,
    CategoryToysComponent,
    ToysViewContainerComponent,
    ToysViewComponent,
    RegistrationContainerComponent,
    PageNotFoundComponent,
    LocationToysComponent,
    EditProfileComponent,
    EditProfileContainerComponent,
    ProfileComponent,
    ProfileContainerComponent,
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
  ],
  providers: [
    CategoryToysResolver,
    LocationToysResolver,
    ToysService,
    CitiesResolver,
    CityService,
    UserResolver,
    UserService,
    TopTradersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
