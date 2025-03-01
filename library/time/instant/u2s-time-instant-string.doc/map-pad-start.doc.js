/**
 * @import { Stringifiable } from "./_common/_exports.js";
 * @import { PadStart } from "./map-pad-start.doc/_exports.js";
 */

/**
 * @template {readonly Stringifiable[]} TupleTemplate
 * @template {number} MaxLengthTemplate
 * @template {string} [FillStringTemplate=" "]
 * @typedef {(
 * {
 *  [Index in keyof TupleTemplate]: PadStart<TupleTemplate[Index], MaxLengthTemplate, FillStringTemplate>;
 * }
 * )} MapPadStart
 */
