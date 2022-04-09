import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RoutingModule } from './routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
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
import { TopChipsComponent } from './features/home/components/top-chips/top-chips.component';

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
    TopChipsComponent
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
