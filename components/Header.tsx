'use client';

import Image from 'next/image';
import { useState } from 'react';
import MobileNavMenu from './MobileNavMenu';

const Header = () => {
	const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

	return (
		<header className='flex justify-between items-center w-full px-6 pt-5 pb-6 relative'>
			<MobileNavMenu
				showNavMenu={showNavMenu}
				setShowNavMenu={setShowNavMenu}
			/>
			<nav className='flex items-center gap-4'>
				<Image
					src={'/images/icon-menu.svg'}
					alt='menu'
					height={15}
					width={16}
					className='cursor-pointer md:hidden'
					onClick={() => setShowNavMenu(true)}
				/>
				<Image
					src={'/images/logo.svg'}
					alt='sneakers'
					height={20}
					width={138}
				/>
			</nav>
			<div className='flex items-center gap-[22px]'>
				<Image
					src={'/images/icon-cart.svg'}
					alt='cart'
					height={20}
					width={22}
				/>
				<Image
					src={'/images/image-avatar.png'}
					alt='avatar'
					height={50}
					width={50}
					className='h-[24px] w-[24px]'
				/>
			</div>
		</header>
	);
};

export default Header;
