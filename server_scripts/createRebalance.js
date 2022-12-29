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
	event.remove({input: MC('red_sand'), output: MC('gold_nugget'), type: CR('splashing')})
	event.recipes.createSplashing([Item.of(MC('clay_ball')).withChance(0.25).toResultJson()], MC('red_sand'))
//    event.custom({"type":CR('splashing'),"ingredients":[{"item":MC('red_sand')}],"results":[{"item":MC('clay_ball'),"chance":0.25}]}) -- if you don't have kubejs create

	event.remove({input: MC('gravel'), output: 'minecraft:iron_nugget', type: CR('splashing')})
	event.recipes.createSplashing([Item.of(MC('flint')).withChance(0.25).toResultJson()], MC('gravel'))
//    event.custom({"type":CR('splashing'),"ingredients":[{"item":MC('gravel')}],"results":[{"item":MC('flint'),"chance":0.25}]}) -- if you don't have kubejs create

	event.remove({input: MC('soul_sand'), output: MC('gold_nugget'), type: CR('splashing')})
	event.recipes.createSplashing([Item.of(MC('quartz'), 4).withChance(0.12).toResultJson()], MC('soul_sand'))
		
	event.remove({output: CR('mechanical_drill')})
	event.shaped(CR('mechanical_drill'), [
		'DAD',
		'AMA',
		'ICI'
	], {
		A: CR('andesite_alloy'),
		C: CR('railway_casing'),
		I: MC('iron_block'),
		D: MC('diamond'),
		M: CR('precision_mechanism')
	})
})

onEvent('block.loot_tables', event => {
	event.modifyBlock(MC('granite'), table => {
		table.addPool(pool => {
			pool.addItem(MC('iron_nugget')).randomChance(0.01)
			pool.addItem(MC('gold_nugget')).randomChance(0.005)
		})
	})
})
