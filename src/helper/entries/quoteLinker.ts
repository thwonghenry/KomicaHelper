import initializeQLinks from '../quote';

if (document.readyState !== 'loading') {
    initializeQLinks();
} else {
    document.addEventListener('DOMContentLoaded', initializeQLinks.bind(undefined));
}
