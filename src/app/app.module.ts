import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FilterPipe } from './../datas/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SearchResultComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
