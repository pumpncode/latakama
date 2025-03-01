import { bignumber } from "mathjs";

import { t0, t0Uncertainty } from "./maximum-t0-big-number/_exports.js";

const maximumT0BigNumber = bignumber(t0 + t0Uncertainty);

export default maximumT0BigNumber;
