import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookStoreModule} from './book-store/book-store.module';
import { PagesModule } from './pages/pages.module';
import { PartialsModule } from './partials/partials.module';

// import { HeaderComponent } from './partials/header/header.component';
// import { FooterComponent } from './partials/footer/footer.component';
// import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { ServicesComponent } from './pages/services/services.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { BasePageComponent } from './partials/base-page/base-page.component';




@NgModule({
  declarations: [
    AppComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    PartialsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
