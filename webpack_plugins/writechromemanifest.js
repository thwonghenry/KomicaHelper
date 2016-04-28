const fs = require('fs');

function metadataToManifest(metadata) {
    
}

function manifestWriter(metadata, option) {
    const apply = (compiler) => {
        compiler.on('after-emit', (compilation, callback) => {
            const path = option.path;
            new Promise((resolve, reject) => {
                fs.writeFile(path, )
            });
        });
    }
}
