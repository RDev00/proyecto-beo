export default function getSound(sound, type){
	const value = sound.value;
	if (value <= -1 || value >= 101) {
		return console.error(`La cantidad ${value} excede lo permitido`)
	}
	if (type !== "general" && type !== "ambient" && type !== "sfx") {
		return console.error(`Valor ${type} no existe`);
	}
	localStorage.setItem(type, value);
}