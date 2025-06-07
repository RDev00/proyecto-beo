export default function quitSound(type){
	if (type !== "general" && type !== "ambient" && type !== "sfx") {
		return console.error(`Valor ${type} no existe`);
	}
	localStorage.setItem(type, 0);
}