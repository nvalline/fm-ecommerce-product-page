import MobileImageSlider from '@/components/MobileImageSlider';

export default function Home() {
	return (
		<main>
			<section className='mx-auto max-w-[375px]'>
				<div>
					<MobileImageSlider />
				</div>
				<div className='w-full p-6 flex flex-col gap-6'>
					<div className='flex flex-col gap-4'>
						<p className='text-xs font-bold tracking-[1.85px] text-neutral-darkGrayishBlue uppercase'>
							Sneaker Company
						</p>
						<h1 className='text-[1.75rem] leading-8 font-bold text-neutral-veryDarkBlue'>
							Fall Limited Edition Sneakers
						</h1>
						<p className='text-base font-regular text-neutral-darkGrayishBlue'>
							These low-profile sneakers are your perfect casual wear companion.
							Featuring a durable rubber outer sole, they’ll withstand
							everything the weather can offer.
						</p>
					</div>

					<div className='flex justify-between items-center w-full'>
						<div className='flex items-center gap-4'>
							<h2 className='text-[1.75rem] font-bold text-neutral-veryDarkBlue'>
								$125.00
							</h2>
							<div className='px-[0.625rem] py-1 bg-neutral-veryDarkBlue rounded-md'>
								<p className='text-base leading-5 font-bold text-white'>50%</p>
							</div>
						</div>
						<p className='text-base font-bold text-neutral-darkGrayishBlue line-through'>
							$250.00
						</p>
					</div>
				</div>
				Form
			</section>
		</main>
	);
}
