'use client';

import Image from 'next/image';
import { useState } from 'react';
import MobileNavMenu from './MobileNavMenu';
import Link from 'next/link';

const Header = () => {
	const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

	return (
		<header className='flex justify-between items-center w-full px-6 pt-5 pb-6 relative'>
			<div className='flex items-center gap-4'>
				<nav>
					<input
						type='checkbox'
						name='hamburger'
						id='hamburger'
						className='peer'
						hidden
					/>
					<label
						htmlFor='hamburger'
						className='peer-checked:hamburger relative cursor-pointer md:hidden z-20'
					>
						<Image
							src={`${
								!showNavMenu
									? '/images/icon-menu.svg'
									: '/images/icon-close.svg'
							}`}
							alt='menu'
							height={15}
							width={16}
							onClick={() => setShowNavMenu(!showNavMenu)}
						/>
					</label>

					<div className='peer-checked:translate-x-0 absolute inset-0 w-[66%] translate-x-[-100%] h-screen bg-white transition duration-500 md:hidden'>
						<MobileNavMenu />
					</div>
				</nav>

				<Link href={'/'}>
					<Image
						src={'/images/logo.svg'}
						alt='sneakers'
						height={20}
						width={138}
					/>
				</Link>
			</div>

			<div className='flex items-center gap-[22px]'>
				<div>
					<input
						type='checkbox'
						name='cart'
						id='cart'
						className='peer'
						hidden
					/>
					<label htmlFor='cart' className='peer-checked:cart cursor-pointer'>
						<Image
							src={'/images/icon-cart.svg'}
							alt='cart'
							height={20}
							width={22}
						/>
					</label>
				</div>

				<div>
					<input
						type='checkbox'
						name='avatar'
						id='avatar'
						className='peer'
						hidden
					/>
					<label
						htmlFor='avatar'
						className='peer-checked:avatar cursor-pointer'
					>
						<Image
							src={'/images/image-avatar.png'}
							alt='avatar'
							height={50}
							width={50}
							className='h-[24px] w-[24px]'
						/>
					</label>
				</div>
			</div>
		</header>
	);
};

export default Header;
