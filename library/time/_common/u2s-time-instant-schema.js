import * as v from "@valibot/valibot";

import { u2sTimeInstantSchemaObject } from "./u2s-time-instant-schema/_exports.js";

const u2sTimeInstantSchema = v.strictObject(u2sTimeInstantSchemaObject);

export default u2sTimeInstantSchema;
