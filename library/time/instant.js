/* eslint-disable unicorn/require-number-to-fixed-digits-argument */
import * as v from "@valibot/valibot";
import { bignumber } from "mathjs";

import {
	factorBase,
	factorExponentMultiplier,
	quectosecondsInSecondBigNumber,
	u2sTimeInstantLikeSchema,
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
 * 	U2sTimeInstantFromDate,
 * 	U2sTimeInstantFromString,
 * 	U2sTimeInstantFromTemporalDuration,
 * 	U2sTimeInstantFromTemporalZonedDateTime,
 * 	U2sTimeInstantFromU2sTimeInstant,
 * 	U2sTimeInstantString,
 * 	Fallback
 * } from "./instant/_exports.js";
 * @import {
 * 	U2sTimeInstantFromTemporalInstant,
 * 	U2sTimeInstantFromEpochQuectoseconds,
 * 	U2sTimeInstantFromU2sTimeInstantLike,
 * 	U2sTimeInstantLike,
 * 	u2sTimeInstantSchema,
 * 	Units
 * } from "./_common/_exports.js";
 */

/**
 * The U2sTimeInstant object represents a date in the u2s system.
 *
 * @template {U2sTimeInstantLike} [U2sTimeInstantLikeTemplate=U2sTimeInstantLike]
 */
const U2sTimeInstant = class {

	jeta = /** @type {Fallback<U2sTimeInstantLikeTemplate["jeta"], number, 0>} */ (0);

	jita = /** @type {Fallback<U2sTimeInstantLikeTemplate["jita"], number, 0>} */ (0);

	jota = /** @type {Fallback<U2sTimeInstantLikeTemplate["jota"], number, 0>} */ (0);

	juta = /** @type {Fallback<U2sTimeInstantLikeTemplate["juta"], number, 0>} */ (0);

	keta = /** @type {Fallback<U2sTimeInstantLikeTemplate["keta"], number, 0>} */ (0);

	kita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kita"], number, 0>} */ (0);

	kota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kota"], number, 0>} */ (0);

	kujeta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kujeta"], number, 0>} */ (0);

	kujita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kujita"], number, 0>} */ (0);

	kujota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kujota"], number, 0>} */ (0);

	kujuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kujuta"], number, 0>} */ (0);

	kuketa = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuketa"], number, 0>} */ (0);

	kukita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kukita"], number, 0>} */ (0);

	kukota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kukota"], number, 0>} */ (0);

	kukuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kukuta"], number, 0>} */ (0);

	kuleta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuleta"], number, 0>} */ (0);

	kulita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kulita"], number, 0>} */ (0);

	kulota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kulota"], number, 0>} */ (0);

	kuluta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuluta"], number, 0>} */ (0);

	kumeta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kumeta"], number, 0>} */ (0);

	kumita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kumita"], number, 0>} */ (0);

	kumota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kumota"], number, 0>} */ (0);

	kumuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kumuta"], number, 0>} */ (0);

	kuneta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuneta"], number, 0>} */ (0);

	kunita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kunita"], number, 0>} */ (0);

	kunota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kunota"], number, 0>} */ (0);

	kunuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kunuta"], number, 0>} */ (0);

	kupeta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kupeta"], number, 0>} */ (0);

	kupita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kupita"], number, 0>} */ (0);

	kupota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kupota"], number, 0>} */ (0);

	kuputa = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuputa"], number, 0>} */ (0);

	kuseta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuseta"], number, 0>} */ (0);

	kusita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kusita"], number, 0>} */ (0);

	kusota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kusota"], number, 0>} */ (0);

	kusuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kusuta"], number, 0>} */ (0);

	kuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuta"], number, 0>} */ (0);

	kuteta = /** @type {Fallback<U2sTimeInstantLikeTemplate["kuteta"], number, 0>} */ (0);

	kutita = /** @type {Fallback<U2sTimeInstantLikeTemplate["kutita"], number, 0>} */ (0);

	kutota = /** @type {Fallback<U2sTimeInstantLikeTemplate["kutota"], number, 0>} */ (0);

	kututa = /** @type {Fallback<U2sTimeInstantLikeTemplate["kututa"], number, 0>} */ (0);

	leta = /** @type {Fallback<U2sTimeInstantLikeTemplate["leta"], number, 0>} */ (0);

	lita = /** @type {Fallback<U2sTimeInstantLikeTemplate["lita"], number, 0>} */ (0);

	lota = /** @type {Fallback<U2sTimeInstantLikeTemplate["lota"], number, 0>} */ (0);

	luta = /** @type {Fallback<U2sTimeInstantLikeTemplate["luta"], number, 0>} */ (0);

	meta = /** @type {Fallback<U2sTimeInstantLikeTemplate["meta"], number, 0>} */ (0);

	mita = /** @type {Fallback<U2sTimeInstantLikeTemplate["mita"], number, 0>} */ (0);

	mota = /** @type {Fallback<U2sTimeInstantLikeTemplate["mota"], number, 0>} */ (0);

	muta = /** @type {Fallback<U2sTimeInstantLikeTemplate["muta"], number, 0>} */ (0);

	neta = /** @type {Fallback<U2sTimeInstantLikeTemplate["neta"], number, 0>} */ (0);

	nita = /** @type {Fallback<U2sTimeInstantLikeTemplate["nita"], number, 0>} */ (0);

	nota = /** @type {Fallback<U2sTimeInstantLikeTemplate["nota"], number, 0>} */ (0);

	nuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["nuta"], number, 0>} */ (0);

	peta = /** @type {Fallback<U2sTimeInstantLikeTemplate["peta"], number, 0>} */ (0);

	pita = /** @type {Fallback<U2sTimeInstantLikeTemplate["pita"], number, 0>} */ (0);

	pota = /** @type {Fallback<U2sTimeInstantLikeTemplate["pota"], number, 0>} */ (0);

	puta = /** @type {Fallback<U2sTimeInstantLikeTemplate["puta"], number, 0>} */ (0);

	seta = /** @type {Fallback<U2sTimeInstantLikeTemplate["seta"], number, 0>} */ (0);

	sita = /** @type {Fallback<U2sTimeInstantLikeTemplate["sita"], number, 0>} */ (0);

	sota = /** @type {Fallback<U2sTimeInstantLikeTemplate["sota"], number, 0>} */ (0);

	suta = /** @type {Fallback<U2sTimeInstantLikeTemplate["suta"], number, 0>} */ (0);

	ta = /** @type {Fallback<U2sTimeInstantLikeTemplate["ta"], number, 0>} */ (0);

	teta = /** @type {Fallback<U2sTimeInstantLikeTemplate["teta"], number, 0>} */ (0);

	tita = /** @type {Fallback<U2sTimeInstantLikeTemplate["tita"], number, 0>} */ (0);

	tota = /** @type {Fallback<U2sTimeInstantLikeTemplate["tota"], number, 0>} */ (0);

	tuta = /** @type {Fallback<U2sTimeInstantLikeTemplate["tuta"], number, 0>} */ (0);

	/**
	 *
	 */
	get #firstValueExponent() {
		return U2sTimeInstant.#getUnitExponent(this.#firstValueUnit);
	}

	/**
	 *
	 */
	get #firstValueUnit() {
		return units.find((unit) => this[unit] > 0) ?? "ta";
	}

	/**
	 * Constructs a U2sTimeInstant.
	 *
	 * @param {U2sTimeInstantLikeTemplate} [u2sTimeInstantLike]
	 * @example
	 */
	constructor(u2sTimeInstantLike = /** @type {U2sTimeInstantLikeTemplate} */ ({})) {
		Object.assign(
			this,
			v.parse(u2sTimeInstantLikeSchema, u2sTimeInstantLike)
		);
	}

	/**
	 * Convert thing to U2sTimeInstant.
	 *
	 * @template {U2sTimeInstant|U2sTimeInstantLike|Temporal.Instant|Temporal.ZonedDateTime|Temporal.Duration|Date|number|bigint|string}  ThingTemplate
	 * @param {ThingTemplate} thing
	 * @returns {(
	 * ThingTemplate extends typeof U2sTimeInstant
	 * ? U2sTimeInstantFromU2sTimeInstant<ThingTemplate>
	 * : ThingTemplate extends U2sTimeInstantLike
	 * ? U2sTimeInstantFromU2sTimeInstantLike<ThingTemplate>
	 * : ThingTemplate extends Temporal.Instant
	 * ? U2sTimeInstantFromTemporalInstant<ThingTemplate>
	 * : ThingTemplate extends Temporal.ZonedDateTime
	 * ? U2sTimeInstantFromTemporalZonedDateTime<ThingTemplate>
	 * : ThingTemplate extends Temporal.Duration
	 * ? U2sTimeInstantFromTemporalDuration<ThingTemplate>
	 * : ThingTemplate extends Date
	 * ? U2sTimeInstantFromDate<ThingTemplate>
	 * : ThingTemplate extends number | bigint
	 * ? U2sTimeInstantFromEpochQuectoseconds<ThingTemplate>
	 * : ThingTemplate extends string
	 * ? U2sTimeInstantFromString<ThingTemplate>
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

		if (thing instanceof U2sTimeInstant) {
			// @ts-ignore
			return this.#fromU2sTimeInstant(thing);
		}

		if (v.is(u2sTimeInstantLikeSchema, thing)) {
			// @ts-ignore
			return this.#fromU2sTimeInstantLike(thing);
		}

		throw new TypeError(`Unsupported type: ${typeof thing}`);
	};

	/**
	 * Convert Date to U2sTimeInstant.
	 *
	 * @template {Date} DateTemplate
	 * @param {DateTemplate} date
	 * @returns {U2sTimeInstantFromDate<DateTemplate>}
	 * @example
	 */
	static #fromDate = (date) => this.#fromTemporalInstant(date.toTemporalInstant());

	/**
	 * Convert EpochQuectoseconds to U2sTimeInstant.
	 *
	 * @template {number|bigint} EpochQuectosecondsTemplate
	 * @param {EpochQuectosecondsTemplate} epochQuectoseconds
	 * @returns {U2sTimeInstantFromEpochQuectoseconds<EpochQuectosecondsTemplate>}
	 * @example
	 */
	static #fromEpochQuectoseconds = (epochQuectoseconds) => {
		/**
		 * @type {U2sTimeInstantLike}
		 */
		const u2sTimeInstant = {};

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

			u2sTimeInstant[unit] = flooredFractionBigNumber.toNumber();
		}

		return U2sTimeInstant.#fromU2sTimeInstantLike(u2sTimeInstant);
	};

	/**
	 * Convert string to U2sTimeInstant.
	 *
	 * @template {string} StringTemplate
	 * @param {StringTemplate} string
	 * @returns {U2sTimeInstantFromString<StringTemplate>}
	 * @example
	 */
	static #fromString = (string) => {
		const [exponent, ...values] = string.split("-").map((string) => Number.parseInt(string, 16));

		return this.#fromU2sTimeInstantLike(
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
	 * Convert Duration to U2sTimeInstant.
	 *
	 * @template {Temporal.Duration} DurationTemplate
	 * @param {DurationTemplate} duration
	 * @returns {U2sTimeInstantFromTemporalDuration<DurationTemplate>}
	 * @example
	 */
	static #fromTemporalDuration = (duration) => this.#fromEpochQuectoseconds(
		BigInt(bignumber(duration.total("seconds")).times(quectosecondsInSecondBigNumber).toFixed())
	);

	/**
	 * Convert Instant to U2sTimeInstant.
	 *
	 * @template {Temporal.Instant} InstantTemplate
	 * @param {InstantTemplate} instant
	 * @returns {U2sTimeInstantFromTemporalInstant<InstantTemplate>}
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
	 * Convert ZonedDateTime to U2sTimeInstant.
	 *
	 * @template {Temporal.ZonedDateTime} ZonedDateTimeTemplate
	 * @param {ZonedDateTimeTemplate} zonedDateTime
	 * @returns {U2sTimeInstantFromTemporalZonedDateTime<ZonedDateTimeTemplate>}
	 * @example
	 */
	static #fromTemporalZonedDateTime = (zonedDateTime) => this.#fromTemporalInstant(
		zonedDateTime.toInstant()
	);

	/**
	 * Convert U2sTimeInstant to U2sTimeInstant.
	 *
	 * @template {U2sTimeInstant} U2sTimeInstantTemplate
	 * @param {U2sTimeInstantTemplate} u2sTimeInstant
	 * @returns {U2sTimeInstantFromU2sTimeInstant<U2sTimeInstantTemplate>}
	 * @example
	 */
	static #fromU2sTimeInstant = (u2sTimeInstant) => new U2sTimeInstant(u2sTimeInstant);

	/**
	 * Convert U2sTimeInstantLike to U2sTimeInstant.
	 *
	 * @template {U2sTimeInstantLike} U2sTimeInstantLikeTemplate
	 * @param {U2sTimeInstantLikeTemplate} u2sTimeInstantLike
	 * @returns {U2sTimeInstantFromU2sTimeInstantLike<U2sTimeInstantLikeTemplate>}
	 * @example
	 */
	static #fromU2sTimeInstantLike = (u2sTimeInstantLike) => new U2sTimeInstant(u2sTimeInstantLike);

	/**
	 *
	 * @param unit
	 * @example
	 */
	static #getUnitExponent(unit) {
		return units.toReversed().indexOf(unit);
	}

	/**
	 * Stringify U2sTimeInstant
	 *
	 * @template {number} [StartAtTemplate=Call<Numbers.Sub<Units["length"], 1>>]
	 * @template {number} [EndAtTemplate=0]
	 * @param {object} [options] - The options object.
	 * @param {StartAtTemplate} [options.startAt] - The starting exponent.
	 * @param {EndAtTemplate} [options.endAt] - The ending exponent.
	 * @returns {U2sTimeInstantString<this, StartAtTemplate, EndAtTemplate>}
	 * @example
	 */
	toString = ({
		endAt = /** @type {EndAtTemplate} */ (0),
		startAt = /** @type {StartAtTemplate} */ (Math.max(this.#firstValueExponent, endAt))
	} = {}) => {
		const entries = /** @type {Entries<v.InferOutput<typeof u2sTimeInstantSchema>>} */ (
			Object.entries(this)
		);

		return /** @type {U2sTimeInstantString<this, StartAtTemplate, EndAtTemplate>} */ (
			entries
				.filter(([unit]) => units.includes(unit))
				.toSorted(([unitA], [unitB]) => units.indexOf(unitB) - units.indexOf(unitA))
				.map(([unit, number]) => [number, unit])
				.slice(endAt, startAt + 1)
				.toReversed()
				.map(([number], index) => (
					index === 0
						? `${startAt}-${number.toString(16).padStart(2, "0")}`
						: number.toString(16).padStart(2, "0")
				))
				.join("-")
		);
	};

};

export default U2sTimeInstant;
