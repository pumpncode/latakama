const referenceInstant = Temporal.PlainDateTime.from({
	second: 37,
	day: 25,
	hour: 9,
	microsecond: 0,
	millisecond: 0,
	minute: 2,
	month: 2,
	nanosecond: 0,
	year: 2_025
})
	.toZonedDateTime("Europe/Vienna")
	.toInstant();

export default referenceInstant;
