import * as v from "@valibot/valibot";

import units from "../../units.js";

import { baseFactor } from "./latakama-time-instant-schema-entries/_exports.js";

const latakamaTimeInstantSchemaEntries = units.map((unit) => /** @type {const} */ ([
	unit,
	v.pipe(
		v.number(),
		v.integer(),
		v.minValue(0),
		v.maxValue(baseFactor)
	)
]));

export default latakamaTimeInstantSchemaEntries;
