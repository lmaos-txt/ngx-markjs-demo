import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMarkjsModule } from '@lmaos/ngx-markjs';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, NgxMarkjsModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
