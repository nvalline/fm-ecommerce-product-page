'use client';

import Image from 'next/image';
import CartIcon from './CartIcon';

const Form = () => {
	return (
		<form className='flex flex-col items-center gap-4 px-6'>
			<div className='relative flex justify-center items-center px-6 py-5 w-full bg-neutral-lightGrayishBlue rounded-[0.625rem]'>
				<p className='text-base leading-4 font-bold text-neutral-veryDarkBlue'>
					0
				</p>
				<button className='absolute left-6 top-[1.625rem] cursor-pointer'>
					<Image
						src='/images/icon-minus.svg'
						alt='decrease quantity'
						height={3.33}
						width={12}
					/>
				</button>
				<button className='absolute right-6 top-[1.375rem] cursor-pointer'>
					<Image
						src={'/images/icon-plus.svg'}
						alt='increase quantity'
						height={12}
						width={12}
					/>
				</button>
			</div>

			<button
				type='submit'
				className='flex justify-center items-center gap-4 py-5 bg-primary-orange rounded-[0.625rem] w-full shadow-button cursor-pointer button-text'
			>
				<CartIcon height={16} width={17} fill={'fill-neutral-veryDarkBlue'} />
				Add to cart
			</button>
		</form>
	);
};

export default Form;
