/**
 * Created by efi on 06/08/16.
 */
/// <reference path="../../typings.d.ts"/>

import {bootstrap, platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {AppComponent} from "./app.component";
import {AppModule} from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);