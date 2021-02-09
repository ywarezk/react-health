/**
 * 
 
 /
 /about
 /settings/user
 /settings/account
 /settings/profile
 
 
 */

import './Layout.scss';
import Logo from './Logo';

export default function Layout() {
	return (
		<div className="layout">
			<header> 
				hello 
				
				<Logo />
			</header>
			
			
			
			<footer>some footer</footer>
		</div>
	)
}

// no there can be only one export default per file
/*
export default function stam() {
	
}
*/

export const hello = 'world';