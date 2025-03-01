import quectosecondsInSecondBigNumber from "../_common/quectoseconds-in-second-big-number.js";

import {
	daysInJulianYearBigNumber,
	hoursInDayBigNumber,
	maximumT0BigNumber,
	minutesInHourBigNumber,
	secondsInMinuteBigNumber
} from "./maximum-t0-quectoseconds-big-number/_exports.js";

const maximumT0QuectosecondsBigNumber = maximumT0BigNumber
	.times(daysInJulianYearBigNumber)
	.times(hoursInDayBigNumber)
	.times(minutesInHourBigNumber)
	.times(secondsInMinuteBigNumber)
	.times(quectosecondsInSecondBigNumber);

export default maximumT0QuectosecondsBigNumber;
