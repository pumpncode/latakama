import * as v from "@valibot/valibot";

import latakamaTimeInstantSchema from "./latakama-time-instant-schema.js";

const latakamaTimeInstantLikeSchema = v.partial(latakamaTimeInstantSchema);

export default latakamaTimeInstantLikeSchema;
