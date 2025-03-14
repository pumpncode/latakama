import * as v from "@valibot/valibot";

import { latakamaTimeInstantSchemaObject } from "./latakama-time-instant-schema/_exports.js";

const latakamaTimeInstantSchema = v.strictObject(latakamaTimeInstantSchemaObject);

export default latakamaTimeInstantSchema;
