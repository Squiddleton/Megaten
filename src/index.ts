import { Skill } from './skill';

export * from './dataTypes';
export * from './demon';
export * from './error';
export * from './music';
export * from './skill';
export * from './types';

const s = Skill.get('agi', true);
if (s.type === 'ATTACK') {
	s.power.display;
}