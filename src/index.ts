import { Demon } from './demon';

export * from './dataTypes';
export * from './demon';
export { default as MegatenError } from './error';
export * from './skill';
export * from './types';

const arr: string[] = [];
for (const s of Demon.array) {
	if (!arr.includes(s.inherit)) {
		arr.push(s.inherit);
	}
}
console.log(arr);