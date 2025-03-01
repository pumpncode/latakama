import {
	cluster, shift, unique, zip
} from "@radashi-org/radashi";

const vowels = [
	"i",
	"u",
	"e",
	"o"
];

const consonantParts = [
	"m",
	"k",
	"j",
	"p",
	"n",
	"t",
	"l",
	"s"
];

/**
 *
 * @param array
 * @param times
 * @example
 */
const repeatArray = (array, times) => Array.from({ length: times }, () => array).flat();

/**
 *
 * @param arrays
 * @example
 */
const adaptArrays = (arrays) => {
	const maxLength = Math.max(...arrays.map((array) => array.length));

	return arrays
		.map((array) => repeatArray(array, Math.ceil(maxLength / array.length)).slice(0, maxLength));
};

const [adaptedConsonantParts, adaptedVowels] = adaptArrays([consonantParts, vowels]);

const syllables = consonantParts
	.map((consonantPart, index) => zip(shift(adaptedConsonantParts, -index), adaptedVowels))
	.slice(0, vowels.length).flat()
	.map((letters) => letters.join(""));

const length = 2 ** 10;

const base = syllables.length;

console.log(base);

const numbers = Array.from({ length }, (empty, index) => index);

const prefixes = [];

for (const number of numbers) {
	const baseArray = [...number.toString(base)];

	const digitsInDecimal = [...number.toString(base)]
		.map((digit) => Number.parseInt(digit, base));

	const numberSyllables = digitsInDecimal.map((digit) => syllables[digit]);

	prefixes.push(numberSyllables.join(""));
}

console.log(`{${prefixes.map((prefix) => `"${prefix}"`).slice(0, 64).join(",")}}`);
