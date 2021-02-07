/**

loops

string
number
true / false
falsey
jsx
Array


 */
 
 
// Array.prototype.map
/**
 * 
 
 function map(cb) {
	 
 }
 
 todoList.map(function(todoObj) {
	 
 })
 
 [
	 { id: 1, title: 'walk the dogs'},
	{ id: 2, title: 'buy food'},
	{ id: 3, title: 'teach react'}
 ] 
 
 =>
 
 [ 1,2,3 ]
 
 [ 3,1,2 ]
 
 [
	 
	 <li>walk the dogs</li>
	 <li>buy food</li>
	 <li>teach react</li>
 ] 
 
 
 
 */
const todoList = [
	{ id: 1, title: 'walk the dogs'},
	{ id: 2, title: 'buy food'},
	{ id: 3, title: 'teach react'}
]


(
	
	<ul>
		{
			todoList.map((todoObj) => {
				return (
					<li key={todoObj.id} >{todoObj.title}</li>
				)
			})
		}
	</ul>
	
)