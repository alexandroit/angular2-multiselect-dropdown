import { ElementRef, EventEmitter, OnInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ClickOutsideDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    clickOutside: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent, targetElement: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClickOutsideDirective, "[clickOutside]", never, {}, { "clickOutside": "clickOutside"; }, never, never, false, never>;
}
export declare class ScrollDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    scroll: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent, targetElement: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScrollDirective, "[scroll]", never, {}, { "scroll": "scroll"; }, never, never, false, never>;
}
export declare class styleDirective {
    private el;
    constructor(el: ElementRef);
    styleVal: number;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<styleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<styleDirective, "[styleProp]", never, { "styleVal": { "alias": "styleProp"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class setPosition implements OnInit, OnChanges {
    el: ElementRef;
    height: number;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<setPosition, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<setPosition, "[setPosition]", never, { "height": { "alias": "setPosition"; "required": false; }; }, {}, never, never, false, never>;
}
