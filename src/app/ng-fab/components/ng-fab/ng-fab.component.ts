import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ng-fab',
	templateUrl: './ng-fab.component.html',
	styleUrls: ['./ng-fab.component.scss'],
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.fab]': 'useDefaultClass',
		'[class.fab-extended]': 'label',
	}
})
export class NgFabComponent implements OnInit {

	@Input() @HostBinding('class.fab-opened') isOpen: boolean = false;
	@Input() bgColor: string = '#000000';

	@Input()
	@HostBinding('style.color')
	private _color: string = '';
	get color(): string {
		return this._color || this._getContrastColor(this.bgColor);
	}
	set color(v: string) {
		this._color = v;
	}

	@HostBinding('class.fab-disabled') disabled: boolean = false;
	@Input() @HostBinding('attr.position') position: string = 'right-bottom';
	@Input() direction: string = 'top';
	@Input() icon: string = 'fa fa-plus'
	@Input() label?: string;

	useDefaultClass: boolean = true;

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

	@HostListener('document:click', ['$event'])
	clickout(event: any) {
		if (this.isOpen && (event.target.closest('[ngxfabitem]') || !this._elementRef.nativeElement.contains(event.target))) {
			this.isOpen = false;
		}
	}

	// @HostListener('click')
	// onClick(event: Event) {
	// 	console.log(this.ngOptions);
	// }

	// @HostListener('document:click', ['$event'])
	// clickout(event: Event) {
	// 	this.isOpen = false;
	// }
}
