import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown-lib";
import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";
import { AppRouterModule } from "./app.router";
import { CheckForUpdateService } from "./check-for-update.service";
import { SourceTab } from "./components/sourcetab/sourcetab.component";
import { BasicExample } from "./examples/basic";
import { CustomSearchExample } from "./examples/customSearch";
import { CustomPlaceholderExample } from "./examples/customplaceholder";
import { DisableModeExample } from "./examples/disablemode";
import { DynamicDataSetsExample } from "./examples/dynamicDataSets";
import { EventsExample } from "./examples/events";
import { ng2Gist } from "./examples/gist";
import { GroupByExample } from "./examples/groupBy";
import { LazyLoadingExample } from "./examples/lazyLoading";
import { LazyLoadingRemoteDataExample } from "./examples/lazyLoadingRemoteData";
import { LimitBadgesExample } from "./examples/limitbadges";
import { LimitSelectionExample } from "./examples/limitselection";
import { MockService } from "./examples/mock-data";
import { MultipleDropdownsExample } from "./examples/multipleDropdowns";
import { RemoteDataExample } from "./examples/remoteData";
import { ResetDropdownExample } from "./examples/resetdropdown";
import { SearchFilterByOnePropertyExample } from "./examples/searchByOneProperty";
import { SearchFilterExample } from "./examples/searchFilter";
import { SearchFilterAddItemExample } from "./examples/searchFilterAddNewItem";
import { SingleSelectionExample } from "./examples/singleselection";
import { StylingExample } from "./examples/styling";
import { TemplatingExample } from "./examples/templating";
import { ThemingExample } from "./examples/theming";
import { UsingInListExample } from "./examples/usingInList";
import { UsingWithReactiveFormExample } from "./examples/usingInReactForms";
import { UsingWithFormExample } from "./examples/usingWithForms";
import { DialogContentExampleDialog, UsingWithinDialog } from "./examples/usingWithinDialog";
import { ServiceWorkerModule } from '@angular/service-worker';
import { HighlightModule } from "ngx-highlightjs";

@NgModule({
    declarations: [
        AppComponent,
        ng2Gist,
        BasicExample,
        SingleSelectionExample,
        GroupByExample,
        SearchFilterExample,
        TemplatingExample,
        ResetDropdownExample,
        DisableModeExample,
        LimitSelectionExample,
        LimitBadgesExample,
        CustomPlaceholderExample,
        StylingExample,
        UsingWithFormExample,
        UsingWithReactiveFormExample,
        LazyLoadingExample,
        MultipleDropdownsExample,
        DynamicDataSetsExample,
        ThemingExample,
        RemoteDataExample,
        CustomSearchExample,
        SearchFilterByOnePropertyExample,
        LazyLoadingRemoteDataExample,
        SearchFilterAddItemExample,
        EventsExample,
        UsingInListExample,
        SourceTab,
        DialogContentExampleDialog,
        UsingWithinDialog
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRouterModule,
        AngularMultiSelectModule,
        HttpClientModule,
        NgbModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule
    ],
    providers: [MockService, CheckForUpdateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
