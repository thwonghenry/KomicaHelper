import getConfigByURL from './config';
import {synchronizeSetting, setSetting} from './settingsync';

// get the night mode state from local storage
let isNight: boolean = false;
let darkStyleName: string;
// bind the toggle button function
function toggleNightMode(noSync?: boolean): void {
    'use strict';
    const root: HTMLElement = document.documentElement;
    if (isNight) {
        root.classList.remove(darkStyleName);
    } else {
        root.classList.add(darkStyleName);
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

export function startSynchronize(): void {
    'use strict';
    synchronizeSetting('nightmode').then(() => {
        let localNightMode: komicaHelper.Setting = JSON.parse(localStorage.getItem('komica_helper_nightmode'));
        if (localNightMode && (localNightMode.value === 'true') !== isNight) {
            toggleNightMode(true);
        }
    });
}

// initialize this module by providing the dark style of this board
export default function initializeNightMode(config: komicaHelper.Config = getConfigByURL(url), isMenu?: boolean): void {
    'use strict';
    // append the night mode style
    let nightStyle: HTMLStyleElement = document.createElement('style');
    nightStyle.innerHTML = config.darkStyle[0][1];
    let localNightMode: komicaHelper.Setting;
    document.documentElement.appendChild(nightStyle);
    darkStyleName = config.darkStyle.locals.night_mode;

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
    }
    if (localNightMode && localNightMode.value === 'true') {
        toggleNightMode(true);
    }
}
