(function (global) {
    var ngVer = '@2.0.0-rc.2'; // lock in the angular package version; do not let it float to current!

    //map tells the System loader where to look for things
    var map = {
        'app': 'scripts/app',

        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs',
        'ts': 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://unpkg.com/typescript@1.8.10/lib/typescript.js',
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.ts', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };

    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);