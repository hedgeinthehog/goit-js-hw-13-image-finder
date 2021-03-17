import '@pnotify/core/dist/BrightTheme.css';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 1800;

function createNotification(message) {
	alert({
		text: message,
	});
}

export default createNotification;
