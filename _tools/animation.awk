function printAnim(percent) {
	ptp = 0.2
	pi = atan2(0, -1)
	a = sin(pi*2*percent)*(ptp/2)
	printf("  %f%% {\n    top: %fem;\n  }\n", percent*100, a)
}

BEGIN {
	steps = 16
	for(i=0; i<steps; i++) {
		printAnim(i/steps)
	}
}

