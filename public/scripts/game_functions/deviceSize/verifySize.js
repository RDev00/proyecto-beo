export default function verifySize() {
	const screenRatio = (window.innerWidth / window.innerHeight).toFixed(1)

	const sizes = {
		"mobile_iphone" : (19.5 / 9).toFixed(1),
		"mobile_samsung" : (18.5 / 9).toFixed(1),
		"mobile_others" : (20 / 9).toFixed(1),
		"mobile_old" : (18 / 9).toFixed(1),
		"pc" : (16 / 9).toFixed(1),
		"pc_old" : (1 / 1).toFixed(1)
	}

	const verifyScreenSize = (
		sizes.mobile_iphone === screenRatio ||
		sizes.mobile_samsung === screenRatio ||
		sizes.mobile_others === screenRatio ||
		sizes.mobile_old === screenRatio ||
		sizes.pc === screenRatio ||
		sizes.pc_old === screenRatio|| 
		(screenRatio >= 2.4	&& screenRatio <= 2.8)
	);

	if (verifyScreenSize) {
		return true;
	}
	else {
		return false;
	}
}