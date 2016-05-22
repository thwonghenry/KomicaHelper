import * as crossStorage from 'cross-storage';


// used for cross storage hub
export function init(): void {
    'use strict';
    crossStorage.CrossStorageHub.init([
        { allow: ['get', 'set', 'del'], origin: /.*/ },
    ]);
}

// get the setting and send it back with the callback
export function getSetting(key: string, callback: (setting: komicaHelper.Setting) => void): void {
    'use strict';
    const storage: crossStorage.CrossStorageClient = new crossStorage.CrossStorageClient('http://web.komica.org', {});
    storage.onConnect().then(() => {
        return storage.get(`komica_helper_${key}`);
    }).then((setting: string) => {
        callback(JSON.parse(setting) as komicaHelper.Setting);
        storage.close();
    });
}

// set the setting, call callback when finish
export function setSetting(key: string, setting: komicaHelper.Setting, callback?: Function): void {
    'use strict';
    const storage: crossStorage.CrossStorageClient = new crossStorage.CrossStorageClient('http://web.komica.org', {});
    storage.onConnect().then(() => {
        return storage.set(`komica_helper_${key}`, setting);
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

// synchronize the setting between the menu page and local page
export function synchronizeSetting(...keys: string[]): Promise<any> {
    'use strict';

    // add the prefix
    keys = keys.map((key: string) => `komica_helper_${key}`);
    const storage: crossStorage.CrossStorageClient = new crossStorage.CrossStorageClient('http://web.komica.org', {});
    return storage.onConnect().then(() => {
        // get all the keys
        return storage.get(...keys);
    }).then((settings: komicaHelper.Setting[]) => {
        settings = [].concat(settings); // deal with single parameter
        // promises that used to set cross storage's value
        let promises: Promise<any>[] = [];
        if (settings) {
            for (let i: number = 0; i < keys.length; i++) {
                let crossSetting: komicaHelper.Setting = settings[i];
                let localSetting: komicaHelper.Setting = JSON.parse(localStorage.getItem(keys[i]));
                let crossTimestamp: number = 0;
                let localTimestamp: number = 0;
                // retrieve the timestamp of both local and cross storage
                if (crossSetting && crossSetting.timestamp) {
                    crossTimestamp = parseInt(crossSetting.timestamp, 10) || 0;
                }
                if (localSetting && localSetting.timestamp) {
                    localTimestamp = parseInt(localSetting.timestamp, 10) || 0;
                }
                // determine which setting is most recent and update the older one
                if (crossTimestamp > localTimestamp) {
                    localStorage.setItem(keys[i], JSON.stringify(crossSetting));
                } else if (crossTimestamp < localTimestamp) {
                    promises.push(storage.set(keys[i], localSetting));
                }
            }
        }
        // wait for all updates finished
        return Promise.all(promises);
    }).then(() => {
        storage.close();
        // return new promise for the caller
        return new Promise((resolve: Function) => {
            resolve();
        });
    });
}
