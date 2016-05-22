import nightStyles from '../styles/dark/index';

// helper functions that used for binding
function getElementById(id: string, doc: Document): HTMLElement {
    'use strict';
    return doc.getElementById(id);
}

function getElementsByTagName(tag: string, doc: Document): NodeListOf<Element> {
    'use strict';
    return doc.getElementsByTagName(tag);
}

function getElementByTagNameIndex(tag: string, index: number, doc: Document): HTMLElement {
    'use strict';
    const tags: NodeListOf<Element> = getElementsByTagName(tag, doc);
    if (tags) {
        return tags[index] as HTMLElement;
    }
    return undefined;
}

function getElementsByClassName(className: string, doc: Document): NodeListOf<Element> {
    'use strict';
    return doc.getElementsByClassName(className);
}

function getElementsByQuery(query: string, doc: Document): NodeListOf<Element> {
    'use strict';
    return doc.querySelectorAll(query);
}

function extendConfig(oldConfig: komicaHelper.Config, newConfig: komicaHelper.Config): void {
    'use strict';
    for (const key in newConfig) {
        if (!oldConfig.hasOwnProperty(key)) {
            oldConfig[key] = newConfig[key];
        }
    }
}

// default config that is going to be extended
const defaultConfig: komicaHelper.DefaultConfig = {
    darkStyle: nightStyles.default,
    getPostformElement: getElementById.bind(undefined, 'postform_main'),
    getQLinks: getElementsByClassName.bind(undefined, 'qlink'),
    getReplies: getElementById.bind(undefined, 'threads'),
    getThreads: getElementById.bind(undefined, 'threads'),
    getThumbnails: getElementsByQuery.bind(undefined, '#threads img'),
    isThread: /\?res=/,
    match: /.*/,
    quote: /^((?!page_num).)*#r[0-9]*/,
};

// config for different boards
const configs: komicaHelper.Config[] = [
    {
        match: /http:\/\/.*\.mykomica\.org.*/,
        quote: /.*#r[0-9]*/,
    }, {
        darkStyle: nightStyles.homu,
        getPostformElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThreads: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
        match: /http:\/\/homu\.komica\.org.*/,
        quote: /.*#r[0-9]*/,
    }, {
        darkStyle: nightStyles.homu,
        getPostformElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThreads: getElementByTagNameIndex.bind(undefined, 'body', 0),
        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
        match: /http:\/\/pink\.komica\.org.*/,
        quote: /.*#r[0-9]*/,
    },
];

// function that get config base on the url
export default function getConfigByURL(url: string): komicaHelper.Config {
    'use strict';
    for (let i: number = 0; i < configs.length; i++) {
        let config: komicaHelper.Config = configs[i];
        if (config.match.test(url)) {
            extendConfig(config, defaultConfig);
            return config;
        }
    }
    return defaultConfig;
}
