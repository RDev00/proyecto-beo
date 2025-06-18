export default function verifySize() {
    const screenRatio = (window.innerWidth / window.innerHeight).toFixed(1);
    
    const sizes = {
        // Móviles
        "mobile_iphone": (19.5 / 9).toFixed(1),
        "mobile_samsung": (18.5 / 9).toFixed(1),
        "mobile_others": (20 / 9).toFixed(1),
        "mobile_old": (18 / 9).toFixed(1),
        
        // PCs y laptops estándar
        "pc_wide": (16 / 9).toFixed(1),       // Full HD común
        "pc_standard": (16 / 10).toFixed(1),  // Ratio común en laptops
        "pc_old": (4 / 3).toFixed(1),        // Pantallas antiguas
        "pc_ultrawide": (21 / 9).toFixed(1),  // Monitores ultrawide
        "pc_superwide": (32 / 9).toFixed(1)   // Super ultrawide
    };

    const verifyScreenSize = (
        sizes.mobile_iphone === screenRatio ||
        sizes.mobile_samsung === screenRatio ||
        sizes.mobile_others === screenRatio ||
        sizes.mobile_old === screenRatio ||
        sizes.pc_wide === screenRatio ||
        sizes.pc_standard === screenRatio ||
        sizes.pc_old === screenRatio ||
        sizes.pc_ultrawide === screenRatio ||
        sizes.pc_superwide === screenRatio ||
        (screenRatio >= 2.0 && screenRatio <= 2.2) ||  // Rango móviles modernos
        (screenRatio >= 1.2 && screenRatio <= 1.8) ||   // Rango PCs estándar
        (screenRatio >= 2.4 && screenRatio <= 2.8)      // Ratios inusuales
    );

    if (verifyScreenSize) {
        return true;
    }
    else {
        return false;
    }
}