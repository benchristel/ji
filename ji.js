function expect(actual, verb, expected) {
	function format(value) {
		if (value === undefined) {
			return ''
		}
		return value
	}

	if (!verb(actual, expected)) {
		var name = verb.negatedName || verb.name
		console.error("Expected", actual, name, expected)
		throw "Expected " + actual + " " + name + " " + format(expected)
	}
}

function toEqual(actual, expected) {
	return actual === expected
}

var eq = toEqual;

function toBeEmpty(actual) {
	return actual.length === 0
}

function not(verb) {
	var negated = (...args) => !verb(...args)
	negated.negatedName = "not " + verb.name
	return negated
}