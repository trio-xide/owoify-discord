var faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^", "awaa,,,,"]

function owoify(str) {
	str = str.replace(/oo/g, "woo")															// oo --> woo
	str = str.replace(/Oo/g, "WOo")
	str = str.replace(/oO/g, "woO")
	str = str.replace(/OO/g, "WOO")

	str = str.replace(/(?:r|l)/g, "w")														// r or l --> w
	str = str.replace(/(?:R|L)/g, "W")

	str = str.replace(/n([aeiou])/g, 'ny$1')												// n followed by vowel --> ny
	str = str.replace(/N([aeiou])/g, 'Ny$1')
	str = str.replace(/n([AEIOU])/g, 'nY$1')
	str = str.replace(/N([AEIOU])/g, 'NY$1')

	str = str.replace(/ove/g, "uv")															// ove --> uv
	str = str.replace(/Ove/g, "Uv")
	str = str.replace(/(?:OVe|OVE)/g, "UV")

	str = str.replace(/k([aeiou])/g, "kw$1")												// k followed by vowel --> kw
	str = str.replace(/K([aeiou])/g, 'Kw$1')
	str = str.replace(/k([AEIOU])/g, 'kW$1')
	str = str.replace(/K([AEIOU])/g, "KW$1")
	
	str = str.replace(/\!+/g, " " + faces[Math.floor(Math.random() * faces.length)] + " ")  // ! --> a random face
	
	return str
}

module.exports = owoify