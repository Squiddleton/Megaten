import type { MegatenErrorType } from './types';

/** An exception thrown from the megaten package */
export default class MegatenError extends Error {
	/** The input that caused the exception */
	name: string;
	/** The type of structure where no structure matched the input */
	type: MegatenErrorType;
	constructor(name: string, type: MegatenErrorType) {
		super(`No ${type} named "${name}" was found`);
		this.name = name;
		this.type = type;
	}
}