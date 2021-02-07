/**

events example

// if the js is for attributes
// you can place js expression that returns value that the attribute expect to get

 */
 
function handleClick(num1, num2, num3) {
	console.log('hello world');
}
 
const myButton = (
	<button onClick={ (event) => handleClick(1,2,3) } >
		click me
	</button>
)