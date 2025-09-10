export default {
	name: 'successStory',
	type: 'object',
	title: 'Success Story Section',
	fields: [
		{ name: 'title', type: 'string', title: 'Title' },
		{ name: 'text', type: 'text', title: 'Text' },
		{
			name: 'metrics',
			type: 'array',
			title: 'Metrics',
			of: [
				{
					type: 'object',
					name: 'metric',
					title: 'Metric',
					fields: [
						{ name: 'icon', type: 'image', title: 'Icon' },
						{ name: 'number', type: 'number', title: 'Number' },
						{ name: 'label', type: 'string', title: 'Label' },
					],
				},
			],
		},
	],
}
