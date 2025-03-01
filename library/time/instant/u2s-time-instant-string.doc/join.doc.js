/**
 * @import { Stringifiable } from "./_common/_exports.js";
 */

/**
 * @template {readonly Stringifiable[]} Items
 * @template {string} Delimiter
 * @typedef {(
 * Items extends readonly [infer First extends Stringifiable, ...infer Last extends readonly Stringifiable[]]
 * ? Last extends readonly []
 *   ? `${First}`
 *   : `${First}${Delimiter}${Join<Last, Delimiter>}`
 * : ''
 * )} Join
 */
