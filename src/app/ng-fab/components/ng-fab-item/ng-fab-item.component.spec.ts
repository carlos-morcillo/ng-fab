import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFabItemComponent } from './ng-fab-item.component';

describe('NgFabItemComponent', () => {
	let component: NgFabItemComponent;
	let fixture: ComponentFixture<NgFabItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NgFabItemComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NgFabItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
