/* eslint-disable prefer-arrow-callback */
Package.describe({
    name: 'omega:meteor-desktop-watcher',
    version: '0.0.1',
    summary: 'Watches .desktop dir and triggers rebuilds on file change.',
    git: 'https://github.com/wojtkowiak/meteor-desktop',
    documentation: 'README.md',
    debugOnly: true
});

Npm.depends({
    chokidar: '1.6.0',
    'hash-files': '1.1.1'
});

Package.onUse(function onUse(api) {
    api.versionsFrom('METEOR@1.2');
    api.use('ecmascript');

    api.addFiles([
        'watcher.js'
    ], 'server');
});