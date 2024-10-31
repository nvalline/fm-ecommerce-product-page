'use client';

import Image from 'next/image';
import { useState } from 'react';
import { productImages } from '@/constants';

const MobileImageSlider = () => {
	const [index, setIndex] = useState(0);

	const nextImage = () => {
		setIndex((prevIndex) => (prevIndex + 1) % productImages.length);
	};

	const previousImage = () => {
		setIndex(
			(prevIndex) =>
				(prevIndex - 1 + productImages.length) % productImages.length
		);
	};

	return (
		<div className='relative'>
			<button
				className='absolute top-[50%] -translate-y-1/2 left-4 h-10 w-10 flex justify-center items-center bg-white rounded-full'
				onClick={previousImage}
			>
				<Image
					src={'/images/icon-previous.svg'}
					alt='previous button'
					height={8}
					width={11}
				/>
			</button>
			<Image
				src={productImages[index].imgUrl}
				alt='product image'
				height={300}
				width={375}
				className='h-[300px]'
			/>
			<button
				className='absolute top-[50%] -translate-y-1/2 right-4 h-10 w-10 flex justify-center items-center bg-white rounded-full'
				onClick={nextImage}
			>
				<Image
					src={'/images/icon-next.svg'}
					alt='next button'
					height={8}
					width={11}
				/>
			</button>
		</div>
	);
};

export default MobileImageSlider;
