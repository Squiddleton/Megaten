import { Demon } from './demon.js';
import { Skill } from './skill.js';

for (const demon of Demon.array) {
	if (!demon.isPersonaBased() && !demon.race) {
		console.log(`Demon ${demon.devName} is missing expected race`);
	}

	for (const [statName, statValue] of Object.entries(demon.stats)) {
		if (statValue <= 0 || statValue > 150)
			console.log(`Demon ${demon.devName} has ${statName} stat with unexpected value ${statValue}`);
	}

	for (const skill of demon.learnset) {
		if (!Skill.array.some(s => s.name === skill.name))
			console.log(`Demon ${demon.devName} has unknown skill "${skill.name}"`);

		if (skill.level <= demon.level && skill.level !== 0)
			console.log(`Demon ${demon.devName} learns skill ${skill.name} at unexpected level ${skill.level}`);
	}

	const demonsWithSameLore = Demon.array.filter(d => d.lore === demon.lore);
	if (demon.lore !== null && demonsWithSameLore.length > 1) {
		console.log(`The following demons have the same lore: ${demonsWithSameLore.map(d => d.devName).join(', ')}`);
	}

	if (demon.isPersona()) {
		const demonsWithSameStage = Demon.array.filter(d => d.isPersona() && d.user === demon.user && d.stage === demon.stage);
		if (demonsWithSameStage.length > 1) {
			console.log(`The following demons have the same Persona user and stage: ${demonsWithSameLore.map(d => d.devName).join(', ')}`);
		}
	}
}