export default function getVolume(){
	let general = localStorage.getItem('general') || 100;
	general *= 1;
	let ambient = localStorage.getItem('ambient') || 100;
	ambient *= 1;
	let sfx = localStorage.getItem('sfx') || 100;
	sfx *= 1;
	const volumes = {
		"general" : general,
		"ambient" : ambient,
		"sfx" : sfx
	}
	return volumes;
}