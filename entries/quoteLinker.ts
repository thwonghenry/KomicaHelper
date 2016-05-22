import initializeQLinks from '../src/quote';

if (document.readyState !== 'loading') {
    initializeQLinks();
} else {
    document.addEventListener('DOMContentLoaded', initializeQLinks.bind(undefined));
}
