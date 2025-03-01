import * as v from "@valibot/valibot";

import u2sTimeInstantSchema from "./u2s-time-instant-schema.js";

const u2sTimeInstantLikeSchema = v.partial(u2sTimeInstantSchema);

export default u2sTimeInstantLikeSchema;
