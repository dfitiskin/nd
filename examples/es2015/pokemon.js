class Pokemon {
	constructor(...params) {

		if (params.length == 1 ) {
			params = params[0];
			console.log('original is: ', params);
			if (typeof params === "object") {
				this.name = params.name;
				this.level = params.level;
			}
			else console.log('Wrong Pokemon params');
		}
		else if ( params.length == 2){
			this.name = params[0];
			this.level = params[1];
		}
		else console.log('Wrong Pokemon params');
		console.log('this: ', this);

	}
}

const pocemonsA = [
	{name: 'Molly', level: 1},
	{name: 'Mike', level: 0},
	{name: 'Anny', level: 2}
];

const lostList = pocemonsA.map(value => new Pokemon(value));
