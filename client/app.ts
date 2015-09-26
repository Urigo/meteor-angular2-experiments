/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    template: 'Hello World!'
})
class Socially { }

bootstrap(Socially);
