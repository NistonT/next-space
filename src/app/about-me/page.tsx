import Image from "next/image";

import { ServiceSlider } from "@/components/ServiceSlider";
import sun from "@/public/assets/pngegg.png";

function Page() {
	return (
		<>
			<div className='flex items-center bg-[#0C011A] h-screen overflow-hidden'>
				<div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0'>
					<h1 className='text-[50px] text-white font-semibold'>
						My Space<span className='text-purple-500'>.</span>
					</h1>
					<p className='max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae
						numquam at, provident vero alias obcaecati. Esse sint voluptatum,
						corrupti nesciunt, porro vero, maxime alias nemo necessitatibus
						illum facere iure?
					</p>
				</div>
				<div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
					<Image
						src={sun}
						alt='sun'
						width={260}
						height={260}
						className='w-full h-full hidden md:block'
					/>
				</div>
				<ServiceSlider />
			</div>
		</>
	);
}

export default Page;
