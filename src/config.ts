const configs: Config[] = [{
        match: /default/,
        quote: /^((?!page_num).)*#r[0-9]*/
    }, {
        match: /http:\/\/.*\.mykomica.org.*/,
        quote: /.*#r[0-9]*/
    }
];

export function getConfigByURL(url: string): Config {
    for (let i = 0; i < configs.length; i++) {
        const config: Config = configs[i];
        if (config.match.test(url)) {
            return config;
        }
    }
    return configs[0];
}
