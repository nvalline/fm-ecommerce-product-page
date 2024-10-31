import Link from 'next/link';
import { navLinks } from '@/constants';

const MobileNavOverlay = () => {
	return (
		<div className='h-full pt-[5.75rem] pl-6'>
			<ul className={`flex flex-col gap-5`}>
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
