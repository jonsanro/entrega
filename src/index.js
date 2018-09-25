import './index.css';
import { makeHeader } from './header.js';
document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(makeHeader());
});