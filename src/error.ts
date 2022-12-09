/** The type of structure that a MegatenError may throw from */
export type MegatenErrorType = 'Demon' | 'Persona' | 'Skill';

/** An exception thrown from the megaten package */
export class MegatenError extends Error {
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