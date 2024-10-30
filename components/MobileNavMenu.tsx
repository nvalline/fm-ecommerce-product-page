import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants';

const MobileNavOverlay = ({
	showNavMenu,
	setShowNavMenu
}: MobileNavMenuProps) => {
	return (
		<div
			className={`${
				!showNavMenu && 'hidden'
			} absolute h-[100vh] inset-y-0 left-0 w-[66.67%] p-6 flex flex-col gap-[54px] bg-white z-10 md:hidden`}
		>
			<Image
				src={'/images/icon-close.svg'}
				alt='close'
				height={14}
				width={14}
				className='cursor-pointer'
				onClick={() => setShowNavMenu(false)}
			/>
			<ul className='flex flex-col gap-5'>
				{navLinks.map((link) => (
					<li key={link.label} className='cursor-pointer'>
						<Link href={link.href}>
							<p className='font-bold leading-[26px] text-neutral-veryDarkBlue'>
								{link.label}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MobileNavOverlay;
