import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFabModule } from './ng-fab/ng-fab.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgFabModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
