/* eslint-disable unicorn/require-number-to-fixed-digits-argument */
import * as v from "@valibot/valibot";
import { bignumber } from "mathjs";

import {
	factorBase,
	factorExponentMultiplier,
	quectosecondsInSecondBigNumber,
	latakamaTimeInstantLikeSchema,
	units
} from "./_common/_exports.js";
import {
	maximumT0QuectosecondsBigNumber,
	referenceInstant,
	taQuectosecondsBigNumber
} from "./instant/_exports.js";

/**
 * @import { Entries } from "type-fest";
 * @import { Call, Numbers } from "hotscript";
 * @import {
 * 	LatakamaTimeInstantFromDate,
 * 	LatakamaTimeInstantFromString,
 * 	LatakamaTimeInstantFromTemporalDuration,
 * 	LatakamaTimeInstantFromTemporalZonedDateTime,
 * 	LatakamaTimeInstantFromLatakamaTimeInstant,
 * 	LatakamaTimeInstantString,
 * 	Fallback
 * } from "./instant/_exports.js";
 * @import {
 * 	LatakamaTimeInstantFromTemporalInstant,
 * 	LatakamaTimeInstantFromEpochQuectoseconds,
 * 	LatakamaTimeInstantFromLatakamaTimeInstantLike,
 * 	LatakamaTimeInstantLike,
 * 	latakamaTimeInstantSchema,
 * 	Units
 * } from "./_common/_exports.js";
 */

/**
 * The LatakamaTimeInstant object represents a date in the latakama system.
 *
 * @template {LatakamaTimeInstantLike} [LatakamaTimeInstantLikeTemplate=LatakamaTimeInstantLike]
 */
const LatakamaTimeInstant = class {

	jeta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["jeta"], number, 0>} */ (0);

	jita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["jita"], number, 0>} */ (0);

	jota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["jota"], number, 0>} */ (0);

	juta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["juta"], number, 0>} */ (0);

	keta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["keta"], number, 0>} */ (0);

	kita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kita"], number, 0>} */ (0);

	kota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kota"], number, 0>} */ (0);

	kujeta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kujeta"], number, 0>} */ (0);

	kujita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kujita"], number, 0>} */ (0);

	kujota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kujota"], number, 0>} */ (0);

	kujuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kujuta"], number, 0>} */ (0);

	kuketa = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuketa"], number, 0>} */ (0);

	kukita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kukita"], number, 0>} */ (0);

	kukota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kukota"], number, 0>} */ (0);

	kukuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kukuta"], number, 0>} */ (0);

	kuleta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuleta"], number, 0>} */ (0);

	kulita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kulita"], number, 0>} */ (0);

	kulota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kulota"], number, 0>} */ (0);

	kuluta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuluta"], number, 0>} */ (0);

	kumeta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kumeta"], number, 0>} */ (0);

	kumita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kumita"], number, 0>} */ (0);

	kumota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kumota"], number, 0>} */ (0);

	kumuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kumuta"], number, 0>} */ (0);

	kuneta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuneta"], number, 0>} */ (0);

	kunita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kunita"], number, 0>} */ (0);

	kunota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kunota"], number, 0>} */ (0);

	kunuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kunuta"], number, 0>} */ (0);

	kupeta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kupeta"], number, 0>} */ (0);

	kupita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kupita"], number, 0>} */ (0);

	kupota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kupota"], number, 0>} */ (0);

	kuputa = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuputa"], number, 0>} */ (0);

	kuseta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuseta"], number, 0>} */ (0);

	kusita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kusita"], number, 0>} */ (0);

	kusota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kusota"], number, 0>} */ (0);

	kusuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kusuta"], number, 0>} */ (0);

	kuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuta"], number, 0>} */ (0);

	kuteta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kuteta"], number, 0>} */ (0);

	kutita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kutita"], number, 0>} */ (0);

	kutota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kutota"], number, 0>} */ (0);

	kututa = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["kututa"], number, 0>} */ (0);

	leta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["leta"], number, 0>} */ (0);

	lita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["lita"], number, 0>} */ (0);

	lota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["lota"], number, 0>} */ (0);

	luta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["luta"], number, 0>} */ (0);

	meta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["meta"], number, 0>} */ (0);

	mita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["mita"], number, 0>} */ (0);

	mota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["mota"], number, 0>} */ (0);

	muta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["muta"], number, 0>} */ (0);

	neta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["neta"], number, 0>} */ (0);

	nita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["nita"], number, 0>} */ (0);

	nota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["nota"], number, 0>} */ (0);

	nuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["nuta"], number, 0>} */ (0);

	peta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["peta"], number, 0>} */ (0);

	pita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["pita"], number, 0>} */ (0);

	pota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["pota"], number, 0>} */ (0);

	puta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["puta"], number, 0>} */ (0);

	seta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["seta"], number, 0>} */ (0);

	sita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["sita"], number, 0>} */ (0);

	sota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["sota"], number, 0>} */ (0);

	suta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["suta"], number, 0>} */ (0);

	ta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["ta"], number, 0>} */ (0);

	teta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["teta"], number, 0>} */ (0);

	tita = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["tita"], number, 0>} */ (0);

	tota = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["tota"], number, 0>} */ (0);

	tuta = /** @type {Fallback<LatakamaTimeInstantLikeTemplate["tuta"], number, 0>} */ (0);

	/**
	 *
	 */
	get #firstValueExponent() {
		return LatakamaTimeInstant.#getUnitExponent(this.#firstValueUnit);
	}

	/**
	 *
	 */
	get #firstValueUnit() {
		return units.find((unit) => this[unit] > 0) ?? "ta";
	}

	/**
	 * Constructs a LatakamaTimeInstant.
	 *
	 * @param {LatakamaTimeInstantLikeTemplate} [latakamaTimeInstantLike]
	 * @example
	 */
	constructor(latakamaTimeInstantLike = /** @type {LatakamaTimeInstantLikeTemplate} */ ({})) {
		Object.assign(
			this,
			v.parse(latakamaTimeInstantLikeSchema, latakamaTimeInstantLike)
		);
	}

	/**
	 * Convert thing to LatakamaTimeInstant.
	 *
	 * @template {LatakamaTimeInstant|LatakamaTimeInstantLike|Temporal.Instant|Temporal.ZonedDateTime|Temporal.Duration|Date|number|bigint|string}  ThingTemplate
	 * @param {ThingTemplate} thing
	 * @returns {(
	 * ThingTemplate extends typeof LatakamaTimeInstant
	 * ? LatakamaTimeInstantFromLatakamaTimeInstant<ThingTemplate>
	 * : ThingTemplate extends LatakamaTimeInstantLike
	 * ? LatakamaTimeInstantFromLatakamaTimeInstantLike<ThingTemplate>
	 * : ThingTemplate extends Temporal.Instant
	 * ? LatakamaTimeInstantFromTemporalInstant<ThingTemplate>
	 * : ThingTemplate extends Temporal.ZonedDateTime
	 * ? LatakamaTimeInstantFromTemporalZonedDateTime<ThingTemplate>
	 * : ThingTemplate extends Temporal.Duration
	 * ? LatakamaTimeInstantFromTemporalDuration<ThingTemplate>
	 * : ThingTemplate extends Date
	 * ? LatakamaTimeInstantFromDate<ThingTemplate>
	 * : ThingTemplate extends number | bigint
	 * ? LatakamaTimeInstantFromEpochQuectoseconds<ThingTemplate>
	 * : ThingTemplate extends string
	 * ? LatakamaTimeInstantFromString<ThingTemplate>
	 * : never
	 * )}
	 * @throws {TypeError} Unsupported type
	 * @example
	 */
	static from = (thing) => {
		if (thing instanceof Temporal.Instant) {
			// @ts-ignore
			return this.#fromTemporalInstant(thing);
		}

		if (thing instanceof Temporal.ZonedDateTime) {
			// @ts-ignore
			return this.#fromTemporalZonedDateTime(thing);
		}

		if (thing instanceof Temporal.Duration) {
			// @ts-ignore
			return this.#fromTemporalDuration(thing);
		}

		if (thing instanceof Date) {
			// @ts-ignore
			return this.#fromDate(thing);
		}

		if (typeof thing === "number" || typeof thing === "bigint") {
			// @ts-ignore
			return this.#fromEpochQuectoseconds(BigInt(thing));
		}

		if (typeof thing === "string") {
			// @ts-ignore
			return this.#fromString(thing);
		}

		if (thing instanceof LatakamaTimeInstant) {
			// @ts-ignore
			return this.#fromLatakamaTimeInstant(thing);
		}

		if (v.is(latakamaTimeInstantLikeSchema, thing)) {
			// @ts-ignore
			return this.#fromLatakamaTimeInstantLike(thing);
		}

		throw new TypeError(`Unsupported type: ${typeof thing}`);
	};

	/**
	 * Convert Date to LatakamaTimeInstant.
	 *
	 * @template {Date} DateTemplate
	 * @param {DateTemplate} date
	 * @returns {LatakamaTimeInstantFromDate<DateTemplate>}
	 * @example
	 */
	static #fromDate = (date) => this.#fromTemporalInstant(date.toTemporalInstant());

	/**
	 * Convert EpochQuectoseconds to LatakamaTimeInstant.
	 *
	 * @template {number|bigint} EpochQuectosecondsTemplate
	 * @param {EpochQuectosecondsTemplate} epochQuectoseconds
	 * @returns {LatakamaTimeInstantFromEpochQuectoseconds<EpochQuectosecondsTemplate>}
	 * @example
	 */
	static #fromEpochQuectoseconds = (epochQuectoseconds) => {
		/**
		 * @type {LatakamaTimeInstantLike}
		 */
		const latakamaTimeInstant = {};

		const rest = epochQuectoseconds;

		let restBigNumber = bignumber(rest);

		let started = false;

		for (const [index, unit] of units.entries()) {
			const factorExponentMultiplicand = units.length - index - 1;

			const factorBigNumber = bignumber(factorBase)
				.toPower(bignumber(factorExponentMultiplier).times(factorExponentMultiplicand));

			const unitQuectosecondsBigNumber = taQuectosecondsBigNumber.times(factorBigNumber);

			const fractionBigNumber = restBigNumber.dividedBy(unitQuectosecondsBigNumber);

			const flooredFractionBigNumber = fractionBigNumber.floor();

			if (flooredFractionBigNumber.lessThan(1) && !started) {
				continue;
			}
			else {
				started = true;
			}

			restBigNumber = restBigNumber
				.sub(flooredFractionBigNumber.times(unitQuectosecondsBigNumber));

			latakamaTimeInstant[unit] = flooredFractionBigNumber.toNumber();
		}

		return LatakamaTimeInstant.#fromLatakamaTimeInstantLike(latakamaTimeInstant);
	};

	/**
	 * Convert string to LatakamaTimeInstant.
	 *
	 * @template {string} StringTemplate
	 * @param {StringTemplate} string
	 * @returns {LatakamaTimeInstantFromString<StringTemplate>}
	 * @example
	 */
	static #fromString = (string) => {
		const [exponent, ...values] = string.split("-").map((string) => Number.parseInt(string, 16));

		return this.#fromLatakamaTimeInstantLike(
			Object.fromEntries(
				units
					.toReversed()
					.slice(0, exponent + 1)
					.toReversed()
					.map((unit, index) => [unit, values[index]])
			)
		);
	};

	/**
	 * Convert Duration to LatakamaTimeInstant.
	 *
	 * @template {Temporal.Duration} DurationTemplate
	 * @param {DurationTemplate} duration
	 * @returns {LatakamaTimeInstantFromTemporalDuration<DurationTemplate>}
	 * @example
	 */
	static #fromTemporalDuration = (duration) => this.#fromEpochQuectoseconds(
		BigInt(bignumber(duration.total("seconds")).times(quectosecondsInSecondBigNumber).toFixed())
	);

	/**
	 * Convert Instant to LatakamaTimeInstant.
	 *
	 * @template {Temporal.Instant} InstantTemplate
	 * @param {InstantTemplate} instant
	 * @returns {LatakamaTimeInstantFromTemporalInstant<InstantTemplate>}
	 * @example
	 */
	static #fromTemporalInstant = (instant) => {
		const differenceSeconds = referenceInstant.until(instant).total("seconds");

		const differenceSecondsBigNumber = bignumber(differenceSeconds);

		const differenceQuectosecondsBigNumber = differenceSecondsBigNumber
			.times(quectosecondsInSecondBigNumber);

		const epochQuectoseconds = (
			BigInt(maximumT0QuectosecondsBigNumber.toFixed()) +
			BigInt(differenceQuectosecondsBigNumber.toFixed())
		);

		return this.#fromEpochQuectoseconds(epochQuectoseconds);
	};

	/**
	 * Convert ZonedDateTime to LatakamaTimeInstant.
	 *
	 * @template {Temporal.ZonedDateTime} ZonedDateTimeTemplate
	 * @param {ZonedDateTimeTemplate} zonedDateTime
	 * @returns {LatakamaTimeInstantFromTemporalZonedDateTime<ZonedDateTimeTemplate>}
	 * @example
	 */
	static #fromTemporalZonedDateTime = (zonedDateTime) => this.#fromTemporalInstant(
		zonedDateTime.toInstant()
	);

	/**
	 * Convert LatakamaTimeInstant to LatakamaTimeInstant.
	 *
	 * @template {LatakamaTimeInstant} LatakamaTimeInstantTemplate
	 * @param {LatakamaTimeInstantTemplate} latakamaTimeInstant
	 * @returns {LatakamaTimeInstantFromLatakamaTimeInstant<LatakamaTimeInstantTemplate>}
	 * @example
	 */
	static #fromLatakamaTimeInstant = (latakamaTimeInstant) => new LatakamaTimeInstant(latakamaTimeInstant);

	/**
	 * Convert LatakamaTimeInstantLike to LatakamaTimeInstant.
	 *
	 * @template {LatakamaTimeInstantLike} LatakamaTimeInstantLikeTemplate
	 * @param {LatakamaTimeInstantLikeTemplate} latakamaTimeInstantLike
	 * @returns {LatakamaTimeInstantFromLatakamaTimeInstantLike<LatakamaTimeInstantLikeTemplate>}
	 * @example
	 */
	static #fromLatakamaTimeInstantLike = (latakamaTimeInstantLike) => new LatakamaTimeInstant(latakamaTimeInstantLike);

	/**
	 *
	 * @param unit
	 * @example
	 */
	static #getUnitExponent(unit) {
		return units.toReversed().indexOf(unit);
	}

	/**
	 * Stringify LatakamaTimeInstant
	 *
	 * @template {number} [StartAtTemplate=Call<Numbers.Sub<Units["length"], 1>>]
	 * @template {number} [EndAtTemplate=0]
	 * @param {object} [options] - The options object.
	 * @param {StartAtTemplate} [options.startAt] - The starting exponent.
	 * @param {EndAtTemplate} [options.endAt] - The ending exponent.
	 * @returns {LatakamaTimeInstantString<this, StartAtTemplate, EndAtTemplate>}
	 * @example
	 */
	toString = ({
		endAt = /** @type {EndAtTemplate} */ (0),
		startAt = /** @type {StartAtTemplate} */ (Math.max(this.#firstValueExponent, endAt))
	} = {}) => {
		const entries = /** @type {Entries<v.InferOutput<typeof latakamaTimeInstantSchema>>} */ (
			Object.entries(this)
		);

		return /** @type {LatakamaTimeInstantString<this, StartAtTemplate, EndAtTemplate>} */ (
			entries
				.filter(([unit]) => units.includes(unit))
				.toSorted(([unitA], [unitB]) => units.indexOf(unitB) - units.indexOf(unitA))
				.map(([unit, number]) => [number, unit])
				.slice(endAt, startAt + 1)
				.toReversed()
				.map(([number], index) => (
					index === 0
						? `${startAt}-${number.toString(16).toUpperCase().padStart(2, "0")}`
						: number.toString(16).toUpperCase().padStart(2, "0")
				))
				.join("-")
		);
	};

};

export default LatakamaTimeInstant;
