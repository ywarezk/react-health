/**

how to branch and create condition in my jsx

 */
 
/**

string
number
true / false
falsey
jsx
Array

 */
 
const condition = true;

/**
 * 
 
 if () {
	 
 } else {
	 
 }
 
 */
 
const hello = condition ? 'hello world' : 'foo bar'


/*

if () {
	
}

*/


// false / 'hello world'
const hello1 = condition && 'hello world';

/*

if (!condition) {
	
}

*/

const hello2 = condition || 'hello world';

function someCondition() {
	if (condition) {
		return 'hello world';
	} else {
		return 'foo bar'
	}
}
 
(
	
	<h1>
		the text is: { condition || 'hello world' }
	</h1>
	
)