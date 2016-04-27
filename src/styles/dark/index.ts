const def: string = require('!css!sass!./default.sass')[0][1];
const homu: string = require('!css!sass!./homu.sass')[0][1];

export default {
    default: def,
    homu,
};
