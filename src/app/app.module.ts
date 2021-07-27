import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

// Components
import { ProductMobileComponent } from './product-mobile/product-mobile.component';
import { ProductLandscapeComponent } from './product-landscape/product-landscape.component';
import { ZoneUtilityComponent } from './utilities/zone-utility/zone-utility.component';

// Material module
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Others modules
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoneDetailComponent } from './utilities/zone-detail/zone-detail.component';
import { TotoComponent } from './toto/toto.component';

@NgModule({
  declarations: [
    AppComponent,

    // Custom components
    LayoutComponent,
    ProductMobileComponent,
    ProductLandscapeComponent,
    ZoneUtilityComponent,
    ZoneDetailComponent,
    TotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Material module
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,

    // Others modules
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
