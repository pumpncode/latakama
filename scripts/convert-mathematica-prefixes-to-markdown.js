import { join } from "@std/path";

const {
	cwd,
	readTextFile,
	writeTextFile
} = Deno;

const dataFolderPath = join(cwd(), "data");

const baseUnits = [
	"la",
	"ta",
	"ka",
	"ma"
];

for (const baseUnit of baseUnits) {
	const mathematicaPrefixesFilePath = join(dataFolderPath, `${baseUnit}-prefixes.txt`);

	const mathematicaPrefixesFileContent = await readTextFile(mathematicaPrefixesFilePath);

	const mathematicaPrefixes = mathematicaPrefixesFileContent.slice(2, -2).split("},{");

	const markdownFileContent = mathematicaPrefixes
		.map((mathematicaPrefix) => {
			const [
				prefix,
				factor,
				conventional
			] = mathematicaPrefix.split(",");

			console.log([
				prefix,
				factor,
				conventional
			]);

			const formattedFactor = `$${factor}$`;

			const formattedConventional = `$${
				conventional
					.replaceAll(/(?<=\^)\((?<exponent>-?\d+)\)(?= [ ()\-A-Za-z]+$)/gu, "{$<exponent>}")
					.replaceAll(/ (?<part1>[A-Za-z]+) (?<part2>years)$/gu, " $<part1>$<part2>")
					.replaceAll(/(?<unit> [ ()\-A-Za-z]+$)/gu, String.raw`\text{$<unit>}`)
					.replaceAll(/(?<=\d)\.(?!\d)/gu, "")
			}$`;

			return `| ${prefix} | ${formattedFactor} | ${formattedConventional} |`;
		})
		.join("\n");

	const markdownFilePath = join(dataFolderPath, `${baseUnit}-prefixes.md`);

	await writeTextFile(markdownFilePath, markdownFileContent);
}
