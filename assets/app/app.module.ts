import {NgModule}       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        // Router
        //RouterModule.forRoot(config),
        // Forms
        FormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {
}
