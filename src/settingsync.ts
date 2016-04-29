import * as crossStorage from 'cross-storage';

// used for cross storage hub
export function init(): void {
    'use strict';
    crossStorage.CrossStorageHub.init([
        { allow: ['get', 'set', 'del'], origin: /.*/ },
    ]);
}

// get the setting and send it back with the callback
export function getSetting(callback: Function): void {
    'use strict';
    const storage: crossStorage.CrossStorageClient = new crossStorage.CrossStorageClient('http://web.komica.org', {});
    storage.onConnect().then(() => {
        return storage.get('komica_helper');
    }).then((setting: string) => {
        callback(JSON.parse(setting));
        storage.close();
    });
}

// set the setting, call callback when finish
export function setSetting(setting: Object, callback?: Function): void {
    'use strict';
    const storage: crossStorage.CrossStorageClient = new crossStorage.CrossStorageClient('http://web.komica.org', {});
    storage.onConnect().then(() => {
        return storage.set('komica_helper', JSON.stringify(setting));
    }).then(() => {
        if (callback) {
            callback();
        }
        storage.close();
    }, (error: any) => {
        console.log('error');
        console.log(error);
    });
}
