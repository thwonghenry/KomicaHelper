import initializeThumbnails from '../src/thumbnail';

if (document.readyState !== 'loading') {
    initializeThumbnails();
} else {
    document.addEventListener('DOMContentLoaded', initializeThumbnails.bind(undefined));
}
