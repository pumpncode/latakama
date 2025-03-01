import U2sTimeInstant from "../instant.js";

const {
	Now
} = Temporal;

/**
 *
 * @example
 */
const u2sTimeNowInstant = () => U2sTimeInstant.from(Now.instant());

export default u2sTimeNowInstant;
