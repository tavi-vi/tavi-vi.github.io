BEGIN {
	t = systime()
	month = strftime("%B", t, true)
	year = strftime("%Y", t, true)
	day = strftime("%-d", t, true)
	suff["1"] = "st"
	suff["2"] = "nd"
	suff["3"] = "rd"
	suffExcept["11"] = "th"
	suffExcept["12"] = "th"
	suffExcept["13"] = "th"
	if(day in suffExcept) {
		daySuffix = suffExcept[day]
	} else if(substr(day, length(day), 1) in suff) {
		daySuffix = suff[substr(day, length(day), 1)]
	} else {
		daySuffix = "th"
	}
	printf("%s the %s%s, %s\n", month, day, daySuffix, year)
}
