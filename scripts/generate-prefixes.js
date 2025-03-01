import { join } from "@std/path";

import { unique } from "@radashi-org/radashi";

const { cwd } = Deno;

const dataFolderPath = join(cwd(), "data");

// https://phoible.org/parameters

const vowels = [
	"i",
	"u",
	"a",
	"e",
	"o"
];

const startingConsonantParts = [
	"m",
	"k",
	"j",
	"p",
	"t",
	"l",
	"s"
];

console.log(startingConsonantParts.join("|"));

const nonStartingConsonantParts = [];

const consonantParts = [...startingConsonantParts, ...nonStartingConsonantParts];

const binaryCombinations = consonantParts.flatMap((consonant) => vowels.map((vowel) => `${consonant}${vowel}`));

const tertiaryCombinations = vowels.flatMap((vowel) => binaryCombinations.flatMap((binaryCombination) => `${vowel}${binaryCombination}`));

const quaternaryCombinations = binaryCombinations.flatMap((binaryCombination) => binaryCombinations.flatMap((innerBinaryCombination) => `${binaryCombination}${innerBinaryCombination}`));

const quinaryCombinations = vowels.flatMap((vowel) => quaternaryCombinations.flatMap((quaternaryCombination) => `${vowel}${quaternaryCombination}`));

const senaryCombinations = binaryCombinations.flatMap((binaryCombination) => quaternaryCombinations.flatMap((quaternaryCombination) => `${binaryCombination}${quaternaryCombination}`));

const septenaryCombinations = vowels.flatMap((vowel) => senaryCombinations.flatMap((senaryCombination) => `${vowel}${senaryCombination}`));

const octonaryCombinations = quaternaryCombinations.flatMap((quaternaryCombination) => quaternaryCombinations.flatMap((innerQuaternaryCombination) => `${quaternaryCombination}${innerQuaternaryCombination}`));

const splitRegex = /(?<=[j-mpstw]|^)(?=[aeiou]|$)|(?<=[aeiou]|^)(?=[j-mpstw]|$)/gv;

const prefixes = [
	...binaryCombinations,
	// ...tertiaryCombinations,
	...quaternaryCombinations,
	...senaryCombinations,
	...octonaryCombinations
]
	.toSorted((prefixA, prefixB) => prefixA.length - prefixB.length)
	.filter((prefix) => nonStartingConsonantParts.every((nonStartingConsonantPart) => !prefix.startsWith(nonStartingConsonantPart)))
	.filter((prefix) => unique(prefix.split(splitRegex)).length === prefix.split(splitRegex).length);

const groups = [...Map.groupBy(prefixes, (prefix) => prefix.split(splitRegex)[0])]
	.map(([key, value]) => value);

/**
 *
 * @param prefixA
 * @param prefixB
 * @example
 */
const getPrefixIntersection = (prefixA, prefixB) => {
	const prefixAParts = prefixA.split(splitRegex);
	const prefixBParts = prefixB.split(splitRegex);

	if (prefixAParts.length < prefixBParts.length || prefixBParts.length < prefixAParts.length) {
		return [];
	}

	return prefixAParts.filter((character, index) => character === prefixBParts[index]);
};

const usedPrefixes = [];

let nextPrefix = null;

while (nextPrefix !== undefined) {
	console.log(usedPrefixes.join(","));
	for (const group of groups) {
		nextPrefix = group
			.filter((prefix) => !usedPrefixes.includes(prefix))
			.find((prefix) => (
				usedPrefixes
					.every((usedPrefix) => {
						const prefixIntersection = getPrefixIntersection(prefix, usedPrefix);

						const maxLength = Math.max(prefix.split(splitRegex).length, usedPrefix.split(splitRegex).length);

						const maxIntersectionLength = Math.floor(maxLength / 4);

						return prefixIntersection.length <= maxIntersectionLength ||
							(
								prefixIntersection.length === (maxIntersectionLength * 2) &&
								(
									(
										usedPrefix.startsWith(prefixIntersection.join("")) &&
										prefix.startsWith(prefixIntersection.join(""))
									) ||
									(
										usedPrefix.endsWith(prefixIntersection.join("")) &&
										prefix.endsWith(prefixIntersection.join(""))
									)
								)
							);
					})
			));

		if (nextPrefix) {
			usedPrefixes.push(nextPrefix);
		}
	}
}

/**
 *
 */
const FixedLengthArray = class extends Array {

	/**
	 *
	 * @param length
	 * @example
	 */
	constructor(length) {
		super(length);
	}

	/**
	 *
	 * @override
	 * @param {...any} items
	 * @example
	 */
	push = (...items) => {
		for (const item of items) {
			this.shift();

			Array.prototype.push.call(this, item);
		}

		return this.length;
	};

};

const firstPartMemory = FixedLengthArray.from({ length: consonantParts.length });
const lastPartMemory = FixedLengthArray.from({ length: vowels.length });

const sortedPrefixes = [
	...Map.groupBy(
		usedPrefixes,
		(prefix) => prefix.split(splitRegex).length
	)
]
	.flatMap(([length, prefixesOfSameLength]) => {
		const alreadyUsedPreferredPrefixes = new Set();

		return Array.from(
			{ length: prefixesOfSameLength.length },
			(empty, index) => {
				const [preferredPrefix] = prefixesOfSameLength
					.filter((prefix) => !alreadyUsedPreferredPrefixes.has(prefix))
					.toSorted((prefixA, prefixB) => {
						const firstPartScoreA = firstPartMemory
							.indexOf(prefixA.split(splitRegex)[0]);
						const firstPartScoreB = firstPartMemory
							.indexOf(prefixB.split(splitRegex)[0]);

						const lastPartScoreA = lastPartMemory
							.indexOf(prefixA.split(splitRegex).at(-1));
						const lastPartScoreB = lastPartMemory
							.indexOf(prefixB.split(splitRegex).at(-1));

						return (
							(
								(firstPartScoreA + lastPartScoreA) -
								(firstPartScoreB + lastPartScoreB)
							)
						);
					});

				alreadyUsedPreferredPrefixes.add(preferredPrefix);

				firstPartMemory.push(preferredPrefix.split(splitRegex)[0]);
				lastPartMemory.push(preferredPrefix.split(splitRegex).at(-1));

				return preferredPrefix;
			}
		);
	})
	.map((prefix, index, { length }) => {
		const mid = Math.floor(length / 2);
		let newIndex;

		if (index === 0) {
			newIndex = mid;
		}
		else if (index % 2 === 1) {
			newIndex = mid + Math.ceil(index / 2);
		}
		else {
			newIndex = mid - (index / 2);
		}

		return {
			index: newIndex,
			prefix
		};
	})
	.toSorted(({ index: indexA }, { index: indexB }) => indexA - indexB)
	.map(({ prefix }) => prefix);

console.log(sortedPrefixes.join("\n"));

const mathematicaList = `{${sortedPrefixes.map((prefix) => `"${prefix}"`).join(",")}}`;

console.log(mathematicaList);

console.log(sortedPrefixes.length);
