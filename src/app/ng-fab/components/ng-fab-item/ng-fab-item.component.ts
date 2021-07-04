import { Component, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
	selector: 'ng-fab-item',
	templateUrl: './ng-fab-item.component.html',
	styleUrls: ['./ng-fab-item.component.scss'],
	host: {
		'[attr.role]': '"button"',
		'[class.fab-extended]': 'label'
	}
})
export class NgFabItemComponent implements OnInit {

	@Input() @HostBinding('style.backgroundColor') bgColor!: string;

	@Input()
	@HostBinding('style.color')
	private _color: string = 'null';
	get color(): string {
		return this._color || this._getContrastColor(this.bgColor);
	}
	set color(v: string) {
		this._color = v;
	}

	@Input() icon!: string;
	@Input() label?: string;

	active: boolean = false;

	constructor(private _elementRef: ElementRef) { }

	ngOnInit(): void { }

	_getContrastColor(color: string): 'black' | 'white' {
		const matches = color.match(/[0-9A-Fa-f]{6}/g);
		if (matches?.length) {
			const color = matches.shift() as string;
			var r = parseInt(color.substr(0, 2), 16);
			var g = parseInt(color.substr(2, 2), 16);
			var b = parseInt(color.substr(4, 2), 16);
			var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
			return (yiq >= 128) ? 'black' : 'white';
		}
		return 'white';
	}
}
