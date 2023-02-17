import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AgmCoreModule } from '@agm/core';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCarouselModule } from 'ng-mat-carousel';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './products/item/item.component';
import { ToileComponent } from './products/toile/toile.component';
import { ParassoleComponent } from './products/parassole/parassole.component';
import { StoreComponent } from './products/store/store.component';
import { StructureComponent } from './products/structure/structure.component';
import { SystemeComponent } from './products/systeme/systeme.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    PresentationComponent,
    ListProductComponent,
    CatalogueComponent,
    GeolocalisationComponent,
    FooterComponent,
    ItemComponent,
    ToileComponent,
    ParassoleComponent,
    StoreComponent,
    StructureComponent,
    SystemeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatExpansionModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEem7d4ES94iw2QLCx4dQhMSw2jiF6mF4',
      libraries: ["places", "geometry"],
    }),
      



    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
