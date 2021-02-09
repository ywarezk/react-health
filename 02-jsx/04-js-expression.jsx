/**

jsx

i can place js expression inside jsx

const h1 = (
	<h1>hello world { Math.random() }</h1>
)


 */
 
// between tags

// import React from 'react';

const h1 = (
	<h1>hello world {Math.random()} </h1>	
)

// in attributes

(
	<h1 className={Math.random().toString()} >hello world</h1>
)

// if the js is for attributes
// you can place js expression that returns value that the attribute expect to get

function myStyleFunction() {
	return {
		color: 'red',
		backgroundColor: 'blue'
	}
}



(
	<h1 style={ myStyleFunction() } >hello world</h1>	
)


// between tags
// what is the js expression i can place

(
	<h1>
		hello world { Math.random() }
	</h1>	
)

function myBooleanFunction() {
	return true;
}

(
	<h1>
		hello world { myBooleanFunction() }
	</h1>
)

(
	<h1>
		hello world { <span>another hello</span> }
	</h1>
)

(
	
	<h1>
		hello world { ['some string', true, undefined, null, false, <span>hello</span>] }
	</h1>
)

/*

string
number
true / false
falsey
jsx
Array


*/

const now = new Date();

(
	<h1>
		{ now.toISOString() }
	</h1>
)