import { Demon } from './demon.js';
import { Skill } from './skill.js';

for (const demon of Demon.array) {
	const demonsWithSameName = Demon.array.filter(d => d.name === demon.name);
	if (demonsWithSameName.length > 1) {
		console.log(`The following demons have the same name: ${demonsWithSameName.map(d => d.devName).join(', ')}`);
	}

	const raceExceptions = ['byakhee', 'hastur']; // Appeared as generic Personas only
	if (!demon.isPersonaBased() && !demon.race && !raceExceptions.includes(demon.devName)) {
		console.log(`Demon ${demon.devName} is missing expected race`);
	}

	for (const [statName, statValue] of Object.entries(demon.stats)) {
		if (statValue <= 0 || statValue > 200)
			console.log(`Demon ${demon.devName} has ${statName} stat with unexpected value ${statValue}`);
	}

	for (const skill of demon.learnset) {
		if (!Skill.array.some(s => s.name === skill.name))
			console.log(`Demon ${demon.devName} has unknown skill "${skill.name}"`);

		const innateLevel = demon.game === 'p2' ? 1 : 0;
		const minLevel = demon.game === 'p2' ? 1 : demon.level;
		const maxLevel = demon.game === 'p2' ? 8 : 99;
		if ((skill.level < minLevel || skill.level > maxLevel) && skill.level !== innateLevel)
			console.log(`Demon ${demon.devName} learns skill ${skill.name} at unexpected level ${skill.level}`);
	}

	if (!demon.isPersona() && !demon.lore) {
		console.log(`Demon ${demon.devName} is missing expected lore`);
	}

	const loreExceptions = ['nuwa', 'nuwasnake', 'orpheus', 'orpheusf', 'orpheuspicaro', 'orpheuspicarof'];
	const demonsWithSameLore = Demon.array.filter(d => d.lore === demon.lore);
	if (demon.lore !== null && demonsWithSameLore.length > 1 && !loreExceptions.includes(demon.devName)) {
		console.log(`The following demons have the same lore: ${demonsWithSameLore.map(d => d.devName).join(', ')}`);
	}

	if (demon.isPersona()) {
		const demonsWithSameStage = Demon.array.filter(d => d.isPersona() && d.user === demon.user && d.stage === demon.stage);
		if (demonsWithSameStage.length > 1) {
			console.log(`The following demons have the same Persona user and stage: ${demonsWithSameLore.map(d => d.devName).join(', ')}`);
		}
	}
}