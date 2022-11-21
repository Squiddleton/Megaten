import type { MegatenErrorType } from './types';

export default class MegatenError extends Error {
	name: string;
	type: MegatenErrorType;
	constructor(name: string, type: MegatenErrorType) {
		super(`No ${type} named "${name}" was found`);
		this.name = name;
		this.type = type;
	}
}