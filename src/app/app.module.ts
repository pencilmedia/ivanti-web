// ====== ./app/app.module.ts ======

// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Declarations
import { AppComponent } from './app.component';

// Material Design Lite
import { MdlModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { MdlPopoverModule } from '@angular-mdl/popover';

// Angular 2 Material Design
import 'hammerjs';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

// Prototype
import { protoLanding } from './components/prototype.component';
import { protoCard } from './components/card/card.component';

// Pages
import { protoPages } from './pages/pages.component';
import { protoHome } from './pages/home/home.component';
import { protoInventory } from './pages/inventory/inventory.component';
import { protoScratch } from './pages/scratchsheet/scratchsheet.component';
import { protoIcons } from './pages/icons/icons.component';

// Routing
import { routing } from './app.routes';

// Decorator
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // MD Modules
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    // MDL Modules
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule,
    routing
  ],
  declarations: [
    AppComponent,

    // Prototype
    protoLanding,
    protoHome,
    protoInventory,
    protoScratch,
    protoCard,

    // Pages
    protoPages,
    protoIcons

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Module Class

}
