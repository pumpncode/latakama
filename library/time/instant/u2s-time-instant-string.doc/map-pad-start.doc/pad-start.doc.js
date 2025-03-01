/**
 * @import { Call, Strings, Numbers } from "hotscript";
 * @import { Stringifiable } from "../_common/stringifiable.doc.js";
 */

/**
 * @template {Stringifiable} StringTemplate
 * @template {number} MaxLengthTemplate
 * @template {string} [FillStringTemplate=" "]
 * @template {string} [ActualStringTemplate=`${StringTemplate}`]
 * @typedef {(
 * Call<Strings.Length<ActualStringTemplate>> extends infer LengthTemplate extends number
 * 	? Call<Numbers.GreaterThanOrEqual<LengthTemplate, MaxLengthTemplate>> extends true
 * 		? ActualStringTemplate
 * 		: `${Call<Strings.Repeat<Call<Numbers.Sub<MaxLengthTemplate, LengthTemplate>>, FillStringTemplate>>}${ActualStringTemplate}`
 * 	: ActualStringTemplate
 * )} PadStart
 */
