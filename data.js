var nodes = [
	{id: 1, label: 'PSYCHOLOGY',             title: 'Subject', value: 50, group: 1, x: 0,   y: 0},
    {id: 12, label: 'Human Needs/Reasons',   title: 'Topic',   value: 40, group: 2, x: 200, y: 00},
    {id: 13, label: 'Disruptions',           title: 'Topic',   value: 40, group: 3, x: 200, y: 80},
    {id: 14, label: 'Self/Soul Development', title: 'Topic',   value: 40, group: 4, x: 200, y: -100},

    {id: 121, label: 'Physiological',        title: 'SubTopic',   value: 30, group: 2, x: 300, y: -50},
    {id: 122, label: 'Safety',               title: 'SubTopic',   value: 30, group: 2, x: 360, y: -40},
    {id: 123, label: 'Love',                 title: 'SubTopic',   value: 30, group: 2, x: 420, y: -30},
    {id: 124, label: 'Esteem',               title: 'SubTopic',   value: 30, group: 2, x: 480, y: -20},
    {id: 125, label: 'Self-Actualization',   title: 'SubTopic',   value: 30, group: 2, x: 540, y: 0},

    {id: 131, label: 'Mental Illness',       title: 'SubTopic',   value: 30, group: 3, x: 280, y: 80},

    // -----------------------------------------------------------------------------------------------

	{id: 1251, label: 'to educate',   title: 'Reason',   value: 20, group: 2, x: 590, y: 160}, 
	{id: 1252, label: 'to inform',   title: 'Reason',   value: 20, group: 2, x: 420, y: 100}, 
	{id: 1253, label: 'to entertain',   title: 'Reason',   value: 20, group: 2, x: 680, y: 120}, 
	{id: 1254, label: 'to missinform',   title: 'Reason',   value: 20, group: 2, x: 670, y: 170}, 

	{id: 211, label: 'non-fiction',   title: 'type',   value: 20, group: 5, x: 500, y: 150},
	{id: 212, label: 'fiction',   title: 'type',   value: 20, group: 5, x: 500, y: 250},  

	{id: 21, label: 'writing',   title: 'means of expression',   value: 30, group: 5, x: 300, y: 200}, 
	{id: 22, label: 'speaking',   title: 'means of expression',   value: 30, group: 5, x: 300, y: 208},  
	{id: 2, label: 'STORYTELLING',   title: 'Subject',   value: 50, group: 6, x: 0, y: 200},    
];

var edges = [
	{from: 1, to: 12}, // psychology - human needs
	{from: 1, to: 13}, // psychology - disruptions
	{from: 1, to: 14}, // psychology - self/soul development

	{from: 12, to: 121}, // human needs/reasons - physiological
	{from: 12, to: 122}, // human needs/reasons - safety
	{from: 12, to: 123}, // human needs/reasons - love
	{from: 12, to: 124}, // human needs/reasons - esteem
	{from: 12, to: 125}, // human needs/reasons - self-actualization		

	{from: 13, to: 131}, // disruptions - mental illness

	// -------------------------------------------------------------

	{from: 125, to: 1251}, // self actualization - to educate
	{from: 124, to: 1252}, // esteem - to inform
	{from: 123, to: 1252}, // love - to inform
	{from: 122, to: 1252}, // safety - inform

	{from: 125, to: 1253}, // self actualization - to entertain
	{from: 124, to: 1253}, // esteem - to entertain
	{from: 123, to: 1253}, // love - to entertain
	{from: 122, to: 1253}, // safety - entertain

	{from: 125, to: 1254}, // self actualization - to missinform
	{from: 124, to: 1254}, // esteem - to missinform
	{from: 123, to: 1254}, // love - to missinform
	{from: 122, to: 1254}, // safety - missinform

	{from: 211, to: 1251}, // non fiction - to educate
	{from: 211, to: 1252}, // non fiction - to inform
	{from: 212, to: 1251}, // fiction - to educate

	{from: 21, to: 211}, // writing - non fiction
	{from: 21, to: 212}, // writing - fiction
	{from: 22, to: 211}, // speaking - non fiction
	{from: 22, to: 212}, // speaking - fiction

	{from: 2, to: 21}, // storytelling - writing
	{from: 2, to: 22}, // storytelling - speaking
];