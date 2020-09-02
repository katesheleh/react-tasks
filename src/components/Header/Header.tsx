import NavToggle from '../NavToggle/NavToggle';
import React, {useState} from 'react';

const Header = () => {
	const [navCollapsed, setNavCollapsed] = useState<boolean>(true)
	const onChange = (value: boolean) => setNavCollapsed(!value)

	return (
			<header>
				{/*show nav menu*/}
				<NavToggle title={'Menu'} collapsed={navCollapsed} onChange={onChange}/>
			</header>
	)
}

export default Header;