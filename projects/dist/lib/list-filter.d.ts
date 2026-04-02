import { PipeTransform } from '@angular/core';
import { DataService } from './multiselect.service';
import * as i0 from "@angular/core";
export declare class ListFilterPipe implements PipeTransform {
    private ds;
    filteredList: any;
    constructor(ds: DataService);
    transform(items: any[], filter: any, searchBy: any): any[];
    applyFilter(item: any, filter: any, searchBy: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListFilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ListFilterPipe, "listFilter", false>;
}
