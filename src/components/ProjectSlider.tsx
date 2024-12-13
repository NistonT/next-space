"use client";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/react";

import Space_1 from "@/public/assets/projects/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai.jpg";
import Space_2 from "@/public/assets/projects/space-background-with-comet-flying-towards-planet.jpg";
import Space_3 from "@/public/assets/projects/ultra-detailed-nebula-abstract-wallpaper-4.jpg";
import Space_4 from "@/public/assets/projects/ultra-detailed-nebula-abstract-wallpaper-9.jpg";
import Image from "next/image";

import arrow from "@/public/assets/icons/arrow-right.svg";

const ProImages = [
	{
		name: "space_1",
		src: Space_1,
	},
	{
		name: "space_2",
		src: Space_2,
	},
	{
		name: "space_3",
		src: Space_3,
	},
	{
		name: "space_4",
		src: Space_4,
	},
];

export const ProjectsSlider = () => {
	return (
		<>
			<div className='w-[70%] md:w-[40%]'>
				<Swiper
					breakpoints={{
						700: {
							slidesPerView: 1,
							spaceBetween: 15,
						},
					}}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Pagination]}
				>
					<SwiperSlide className='mb-14'>
						<div className='grid grid-cols-2 gap-4 md:px-16'>
							{ProImages.map(image => (
								<div className='relative group' key={image.name}>
									<Image
										src={image.src}
										alt={image.name}
										width={280}
										height={280}
										className='rounded-md h-full w-full object-cover'
									/>

									<div className='cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200' />
									<div className='cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg'>
										View Space
										<Image
											src={arrow}
											alt='arrow'
											width={20}
											height={20}
											className='invert brightness-0 ml-2'
										/>
									</div>
								</div>
							))}
						</div>
					</SwiperSlide>
					<SwiperSlide className='mb-14'>
						<div className='grid grid-cols-2 gap-4 md:px-16'>
							{ProImages.map(image => (
								<div className='relative group' key={image.name}>
									<Image
										src={image.src}
										alt={image.name}
										width={280}
										height={280}
										className='rounded-md h-full w-full object-cover'
									/>

									<div className='cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200' />
									<div className='cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg'>
										View Space
										<Image
											src={arrow}
											alt='arrow'
											width={20}
											height={20}
											className='invert brightness-0 ml-2'
										/>
									</div>
								</div>
							))}
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};
