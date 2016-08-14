/**
 * Created by efi on 07/08/16.
 */
var map = {
    'app': 'js/app',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular'
};

var packages = {
    'app': {main: 'main.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'}
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/forms',
    '@angular/upgrade'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function (pkgName) {
    packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
});


var config = {
    map: map,
    packages: packages
};

System.config(config);