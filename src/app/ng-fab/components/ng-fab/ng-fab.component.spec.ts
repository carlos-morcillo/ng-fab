import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFabComponent } from './ng-fab.component';

describe('NgFabComponent', () => {
	let component: NgFabComponent;
	let fixture: ComponentFixture<NgFabComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NgFabComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NgFabComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
