import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFabComponent } from './components/ng-fab/ng-fab.component';
import { NgFabItemComponent } from './components/ng-fab-item/ng-fab-item.component';



@NgModule({
	declarations: [
		NgFabComponent,
		NgFabItemComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		NgFabComponent,
		NgFabItemComponent
	]
})
export class NgFabModule { }
