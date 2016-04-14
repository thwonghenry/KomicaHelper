import { Ajax } from './Ajax';

const url = window.location.href;
const ajax = new Ajax('get', url);
ajax.start().then((data) => {
    console.log(data);
}, () => {
        console.log('rejected');
    });
