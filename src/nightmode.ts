import getConfigByURL from './config';
import {synchronizeSetting, setSetting} from './settingsync';

// get the night mode state from local storage
let isNight: boolean = false;
let nightStyle: HTMLStyleElement = document.createElement('style');

// bind the toggle button function
function toggleNightMode(noSync?: boolean): void {
    'use strict';
    if (isNight) {
        document.body.removeChild(nightStyle);
    } else {
        document.body.appendChild(nightStyle);
    }
    // toggle the night mode state
    isNight = !isNight;
    if (!noSync) {
        const setting: komicaHelper.Setting = {
            timestamp: `${Math.floor(Date.now())}`,
            value: isNight ? 'true' : 'false',
        };
        localStorage.setItem('komica_helper_nightmode', JSON.stringify(setting));
        setSetting('nightmode', setting);
    }
}

export function bindNightModeButton(nightButton: HTMLAnchorElement): void {
    'use strict';

    nightButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        toggleNightMode();
    });
}

const url: string = window.location.href;
// initialize this module by providing the dark style of this board
export default function initializeNightMode(darkStyleString: string = getConfigByURL(url).darkStyle, isMenu?: boolean): void {
    'use strict';
    nightStyle.innerHTML = darkStyleString;
    let localNightMode: komicaHelper.Setting;

    if (isMenu) {
        let localSetting: string = localStorage.getItem('komica_helper_nightmode');
        if (localSetting) {
            localNightMode = JSON.parse(localSetting).value;
        }

        // if the page is a menu, attach storage change event
        window.addEventListener('storage', (event: StorageEvent) => {
            if (event.key === 'komica_helper_nightmode') {
                const newSetting: komicaHelper.Setting = JSON.parse(event.newValue).value;
                if ((newSetting.value === 'true') !== isNight) {
                    toggleNightMode(true);
                }
            }
        });
    } else {
        let localSetting: string = localStorage.getItem('komica_helper_nightmode');
        if (localSetting) {
            localNightMode = JSON.parse(localSetting);
        }

        // if the page is a board, synchronize the setting with the menu page
        synchronizeSetting('nightmode').then(() => {
            localNightMode = JSON.parse(localStorage.getItem('komica_helper_nightmode'));
            if (localNightMode && (localNightMode.value === 'true') !== isNight) {
                toggleNightMode(true);
            }
        });
    }
    if (localNightMode && localNightMode.value === 'true') {
        toggleNightMode(true);
    }
}
