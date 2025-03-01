import { prefixes } from "./_common/_exports.js";

/**
 * @import { Units } from "./units.doc.js";
 */

const units = /** @type {Units} */ (
	/** @type {unknown} */ (
		prefixes.map((prefix) => `${prefix}ta`)
	)
);

export default units;
