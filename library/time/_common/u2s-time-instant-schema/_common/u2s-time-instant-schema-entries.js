import * as v from "@valibot/valibot";

import units from "../../units.js";

import { baseFactor } from "./u2s-time-instant-schema-entries/_exports.js";

const u2sTimeInstantSchemaEntries = units.map((unit) => /** @type {const} */ ([
	unit,
	v.pipe(
		v.number(),
		v.integer(),
		v.minValue(0),
		v.maxValue(baseFactor)
	)
]));

export default u2sTimeInstantSchemaEntries;
