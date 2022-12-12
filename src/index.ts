import { Demon } from './demon';

export * from './dataTypes';
export * from './demon';
export * from './error';
export * from './music';
export * from './skill';
export * from './types';

Demon.array.forEach(d => {
	try {
		d.image;
	}
	catch {
		console.log(d.name);
	}
});