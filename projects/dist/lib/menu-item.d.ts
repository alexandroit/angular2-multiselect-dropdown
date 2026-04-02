import { OnInit, OnDestroy, TemplateRef, EmbeddedViewRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class Item {
    template: TemplateRef<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<Item, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Item, "c-item", never, {}, {}, ["template"], never, false, never>;
}
export declare class Badge {
    template: TemplateRef<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<Badge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Badge, "c-badge", never, {}, {}, ["template"], never, false, never>;
}
export declare class Search {
    template: TemplateRef<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<Search, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Search, "c-search", never, {}, {}, ["template"], never, false, never>;
}
export declare class TemplateRenderer implements OnInit, OnDestroy {
    viewContainer: ViewContainerRef;
    data: any;
    item: any;
    view: EmbeddedViewRef<any>;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateRenderer, "c-templateRenderer", never, { "data": { "alias": "data"; "required": false; }; "item": { "alias": "item"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class CIcon {
    name: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CIcon, "c-icon", never, { "name": { "alias": "name"; "required": false; }; }, {}, never, never, false, never>;
}
