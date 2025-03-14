import LatakamaTimeInstant from "../instant.js";

const {
	Now
} = Temporal;

/**
 *
 * @example
 */
const latakamaTimeNowInstant = () => LatakamaTimeInstant.from(Now.instant());

export default latakamaTimeNowInstant;
