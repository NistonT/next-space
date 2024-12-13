"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { FreeMode, Pagination } from "swiper/modules";

import space_5 from "@/public/assets/services/SpaceCity5.jpeg";
import space_6 from "@/public/assets/services/SpaceCity6.jpeg";
import space_7 from "@/public/assets/services/SpaceCity7.jpeg";
import space_8 from "@/public/assets/services/SpaceCity8.jpeg";
import space_9 from "@/public/assets/services/SpaceCity9.jpeg";

import bg_stars from "@/public/assets/bg_stars.jpg";
import {
	RxAccessibility,
	RxCrop,
	RxDesktop,
	RxPencil2,
	RxReader,
	RxRocket,
} from "react-icons/rx";

const ServiceData = [
	{
		icon: RxReader,
		title: "Seo",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		backgroundImage: space_5,
	},
	{
		icon: RxCrop,
		title: "Development",
		content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
		backgroundImage: space_6,
	},
	{
		icon: RxPencil2,
		title: "Branding",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		backgroundImage: space_7,
	},
	{
		icon: RxDesktop,
		title: "Design",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		backgroundImage: space_8,
	},
	{
		icon: RxAccessibility,
		title: "Management",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		backgroundImage: space_9,
	},
	{
		icon: RxRocket,
		title: "Production",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		backgroundImage: bg_stars,
	},
];

export const ServiceSlider = () => {
	return (
		<>
			<div className='absolute bottom-0 right-20 md:bottom-40 md:right-32 w-[60%] md:w-[55%]'>
				<Swiper
					breakpoints={{
						340: {
							slidesPerView: 1,
							spaceBetween: 15,
						},
						700: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
					}}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Pagination]}
				>
					{ServiceData.map(item => (
						<SwiperSlide key={item.title}>
							<div className='cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg rounded-xl px-6 py-8 h-[300px] w-[250px] overflow-hidden'>
								<div
									className='absolute inset-0 bg-cover bg-center'
									style={{ backgroundImage: `url(${item.backgroundImage})` }}
								/>
								<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50' />
								<div className='relative flex flex-col gap-3'>
									<item.icon className='text-purple-500 group-hover:text-purple-400 w-[32px] h-[32px]' />
									<h1 className='text-xl lg:text-2xl'>{item.title}</h1>
									<p className='lg:text-[18px]'>{item.content}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
