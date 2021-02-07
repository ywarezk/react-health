
// create a dom object of h1

/* 

const h1 = document.createElement('h1');
h1.innerText = 'hello world from javascript';

const container = document.getElementById('container');
container.appendChild(h1);

*/

/*

<h1>
	<span>
		<strong>
			<u>					
				Hello world
			</u>
		</strong>
	</span>	
</h1>

*/
/*
const h1 = React.createElement(
	'h1',
	null,
	React.createElement(
		'span',
		null,
		React.createElement(
			'strong',
			null,
			React.createElement(
				'u',
				null,
				'hello world with underline'
			)
		)
	)
)
*/

// JSX
// we tell react how to draw the screen using jsx - HTML
/*
const h1 = (
	<h1>
		<span>
			<strong>
				<u>					
					Hello world with jsx
				</u>
			</strong>
		</span>	
	</h1>
)
*/

function HelloWorld() {
	return (
		<h1>
			<span>
				<strong>
					<u>					
						Hello world with jsx + component
					</u>
				</strong>
			</span>	
		</h1>
	)
}

/*
function App() {
	return (
		<div>
			<Header />
			<Login />
			<Footer />
		</div>
		
	)
	
}

*/

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('container')
)

/**
       
document ---------------> DOM


React  ------------> ReactDOM - document --------------> DOM
React  ------------> react-native --------------> native Mobile app
React  ------------> electroon --------------> Desktop application

to learn react


React core

platform specific

Web / Mobile / Desktop




 */