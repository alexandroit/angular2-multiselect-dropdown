import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DataService {
    filteredData: any;
    private subject;
    setData(data: any): void;
    getData(): Observable<any>;
    getFilteredData(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataService>;
}
