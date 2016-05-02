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

    keys = keys.map((key: string) => `komica_helper_${key}`);
    const storage: crossStorage.CrossStorageClient = new crossStorage.CrossStorageClient('http://web.komica.org', {});
    return storage.onConnect().then(() => {
        return storage.get(...keys);
    }).then((settings: komicaHelper.Setting[]) => {
        settings = [].concat(settings); // ensure it is array
        let promises: Promise<any>[] = [];
        if (settings) {
            for (let i: number = 0; i < keys.length; i++) {
                let crossSetting: komicaHelper.Setting = settings[i];
                let localSetting: komicaHelper.Setting = JSON.parse(localStorage.getItem(keys[i]));
                let crossTimestamp: number = 0;
                let localTimestamp: number = 0;
                if (crossSetting && crossSetting.timestamp) {
                    crossTimestamp = parseInt(crossSetting.timestamp, 10) || 0;
                }
                if (localSetting && localSetting.timestamp) {
                    localTimestamp = parseInt(localSetting.timestamp, 10) || 0;
                }
                // need to apply cross setting to local setting
                if (crossTimestamp > localTimestamp) {
                    localStorage.setItem(keys[i], JSON.stringify(crossSetting));
                } else if (crossTimestamp < localTimestamp) {
                    promises.push(storage.set(keys[i], localSetting));
                }
            }
        }
        return Promise.all(promises);
    }).then(() => {
        storage.close();
        return new Promise((resolve: Function) => {
            resolve();
        });
    });
}
