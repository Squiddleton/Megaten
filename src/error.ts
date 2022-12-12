/** The type of structure that a MegatenError may throw from */
export type MegatenErrorType = 'Demon' | 'Persona' | 'Skill';

/** An exception thrown from the megaten package */
export class MegatenError extends Error {
	/** The input that caused the exception */
	structureName: string;
	/** The type of structure where no structure matched the input */
	structureType: MegatenErrorType;
	constructor(structureName: string, structureType: MegatenErrorType) {
		super(`No ${structureType} named "${structureName}" was found`);
		this.structureName = structureName;
		this.structureType = structureType;
	}
}