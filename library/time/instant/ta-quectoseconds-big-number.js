import { bignumber } from "mathjs";

/**
 * Significand of Planck time in quectoseconds.
 */
const tPQuectosecondsSignificand = 5_391_247;

const tPQuectosecondsSignificandUncertainty = 60;

const taQuectosecondsSignificand = (
	tPQuectosecondsSignificand - tPQuectosecondsSignificandUncertainty
);

const taQuectosecondsSignificandBigNumber = bignumber(taQuectosecondsSignificand);

const taQuectosecondsExponent = -20;
const taQuectosecondsExponentBigNumber = bignumber(taQuectosecondsExponent);

const taQuectosecondsBigNumber = bignumber(taQuectosecondsSignificandBigNumber)
	.times(bignumber(10).pow(taQuectosecondsExponentBigNumber));

export default taQuectosecondsBigNumber;
