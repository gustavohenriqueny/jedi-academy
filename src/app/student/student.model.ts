export class Student {
	constructor(name: string, isJedi: boolean, temple: string) {
		this.name = name;
		this.isJedi = isJedi;
		this.temple = temple;
	}

	name: string;
	isJedi: boolean;
	temple?: string;
}