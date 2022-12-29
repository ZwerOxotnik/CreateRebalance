// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)



let targetStackItems = [
	MC("tuff"), MC("gravel"), MC("cobblestone"), MC("stone"), MC("diorite"),
	MC("andesite"), MC("calcite"), MC("cobbled_deepslate"), MC("deepslate"),
	MC("granite"), MC("netherrack")
]
let minStackItems = [MC("raw_iron"), MC("raw_gold"), MC("raw_copper"), CR("raw_zinc")]
let arraySize = minStackItems.length
for (let i = 0; i < arraySize; i++) {
  minStackItems.push(minStackItems[i] + "_block")
}
minStackItems.push(MC("netherite_scrap"))


onEvent('item.modification', event => {
	for (let itemName of minStackItems) {
		event.modify(itemName, item => {
			item.maxStackSize = 1
		})
	}

	for (let itemName of targetStackItems) {
		event.modify(itemName, item => {
			item.maxStackSize = 16
		})
	}
})
