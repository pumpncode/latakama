/**
 * @import { Entries, Writable, ArraySlice } from "type-fest";
 * @import { Call, Tuples, Strings, Numbers } from "hotscript";
 * @import U2sTimeInstant from "../instant.js";
 * @import { Units } from "../_common/units.doc.js";
 * @import { Join, MapPadStart, MapItemsToValues } from "./u2s-time-instant-string.doc/_exports.js";
 */

// TODO[2025-03-01]: Fix StartAtTemplate to be dynamic (#firstValueExponent)

/**
 * @template {U2sTimeInstant} U2sTimeInstantTemplate
 * @template {number} [StartAtTemplate=Call<Numbers.Sub<Units["length"], 1>>]
 * @template {number} [EndAtTemplate=0]
 * @typedef {(
 * `${StartAtTemplate}-${
 * Join<
 * 	MapPadStart<
 * 		MapItemsToValues<
 * 			Call<Tuples.Reverse<ArraySlice<Call<Tuples.Reverse<Writable<Units>>>, EndAtTemplate, Call<Numbers.Add<StartAtTemplate, 1>>>>>,
 * 			U2sTimeInstantTemplate
 * 		>,
 * 		3,
 * 		"0"
 * 	>,
 * 	"-"
 * >
 * }`
 * )} U2sTimeInstantString
 */
