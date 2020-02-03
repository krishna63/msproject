{
	rules: {
		'header-max-length': [2, "always", 12],
		'body-leading-blank': [1, 'always'],
		'footer-leading-blank': [1, 'always'],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		],
		'subject-empty': [2, 'always'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'improvement',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			]
		]
	}
}