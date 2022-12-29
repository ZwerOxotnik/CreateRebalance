// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true


// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)


onEvent('recipes', event => {
	let horseTemplate = [
		'  I',
		'III',
		'ILI'
	]
	event.shaped(MC('iron_horse_armor'), horseTemplate, {
		I: MC('iron_ingot'),
		L: MC('leather')
	})
	event.shaped(MC('golden_horse_armor'), horseTemplate, {
		I: MC('gold_ingot'),
		L: MC('leather')
	})
	event.shaped(MC('diamond_horse_armor'), horseTemplate, {
		I: MC('diamond'),
		L: MC('leather')
	})

	event.shaped(MC('trident'), [
		' II',
		'DPI',
		'PD '
	], {
		I: MC('iron_block'),
		D: MC('diamond_block'),
		P: MC('prismarine_shard')
	})
	event.shaped(MC('saddle'), [
		'LLL',
		'LLL',
		'S S'
	], {
		L: MC('leather'),
		S: MC('string')
	})
	event.shaped(MC('chest', 4), [
		'LLL',
		'L L',
		'LLL'
	], {
		L: '#minecraft:logs'
	})

	event.shapeless(MC('string', 4), ['#minecraft:wool'])
})

