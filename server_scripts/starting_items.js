// This script adds items on first time player joins, checking gamestages


// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)


let startItems = [
	MC("leather_boots"), MC("stone_sword"), MC("stone_axe"), MC("stone_pickaxe"),
	MC("stone_shovel"), "carrier:glove", MC("oak_log", 48), MC("coal", 64),
	MC("torch", 64), MC("apple", 64), MC("redstone", 32), MC("leather", 8),
	MC("iron_ingot", 8), CR("andesite_alloy", 26), MC("minecart", 2), MC("rail", 128),
	MC("green_bed"), MC("shield"), MC("crafting_table"), CR("super_glue")
]


onEvent('player.logged_in', function (event) {
	// Check if player doesn't have "starting_items" gamestage yet
	if (!event.hasGameStage('starting_items')) {
		event.addGameStage('starting_items')

		for (let item of startItems) {
			event.player.give(item)
		}
//    event.server.scheduleInTicks(1, event.server, function (callback){
//        event.player.tell('test')
//    })
	}
})

