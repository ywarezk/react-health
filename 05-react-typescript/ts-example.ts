const hello: string = 'hello world';

function sayHello(msg: string): number {
	return msg.length;
}

abstract class Person {
	public sayHello() {}
	
	private _birthday() {}
}

interface Something {
	foo: string;
}

enum HelloWorld {
	hello = 0
}

