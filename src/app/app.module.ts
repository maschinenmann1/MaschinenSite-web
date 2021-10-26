import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { ReplaceTagDirective } from './directives/replace-tag.directive';
import { ROUTES } from './routes';
import { SharedModule } from './shared';
import { HomeComponent } from './routes/home/home.component';
import { COMPONENTS } from './components';
import { AnimeModule } from './anime/anime.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReplaceTagDirective,
    ...ROUTES,
    ...COMPONENTS,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AnimeModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
