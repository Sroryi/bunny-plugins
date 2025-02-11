function ma(...a) { return [...a] }

const update = [
	[
		"1.0.0",
		ma("Created the Plugin (woah)"),
	],
	[
		"1.0.1 - 1.0.3",
		ma(
			"[1.0.1] hmm1",
			"[1.0.1] hmm2",
			"[1.0.1] hmm3",			
			"[1.0.22] hmm4",
			"[1.0.22] hmm5",
			"[1.0.22] hmm6"
		),
		ma(
			"[1.0.2] hmm1",
			"[1.0.24] hmm2",
			"[1.0.3] hmm3"
		),
		ma(
			"[1.0.21] hmm1",
			"[1.0.22] hmm2",
			"[1.0.23] hmm3",
			"[1.0.3] hmm4",
			"[1.0.3] hmm5",
		)
	],
	[
		"1.1",
		ma(
			"[1.1.0] hmm1",
			"[1.1.0] hmm2",
		),
		ma(
			"[1.1.0] hmm1",
		)
	],
	[
		"1.2",
		null,
		ma("[1.2] hmm1")
	]
]


export default update.reverse();
