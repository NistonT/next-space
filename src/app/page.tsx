import Image from "next/image";

import style from "./style.module.scss";

import { Particle } from "@/components/Particle";
import spacemen from "./../public/assets/png-transparent-astronauts-from-space-astronaut-spacewalk-universe.png";
import plan from "./../public/assets/pngwing.com (1).png";
import planets from "./../public/assets/pngwing.com.png";

export default function Home() {
	return (
		<main
			className={`flex items-center relative ${style.main_screen} h-screen`}
		>
			<div className='absolute right-0 top-0 h-full w-[80%] z-[2]'>
				<Particle />
			</div>
			<div className='absolute md:right-0 z-[10] w-full top-0'>
				<div>
					<Image
						src={plan}
						alt='plan'
						height={600}
						className='absolute left-0 top-0 select-none'
					/>
				</div>
			</div>
			<div>
				<Image
					src={planets}
					alt='planets'
					height={600}
					className='h-[300px] z-[1] md:h-[600px] absolute right-0 top-0 scale-[-1] select-none'
				/>
			</div>
			<div className='flex flex-col gap-3 pl-40 pt-80 select-none'>
				<h1 className='text-[50px] text-white max-w-[500px]'>
					GALAXY <span className='text-purple-500'>NEW REALITY</span>
				</h1>
				<p className='text-[16px] text-gray-200 md-text-gray-400 mb-10 md:pb-2 max-w-[400px]'>
					Step into a new era where virtual and real worlds merge. Explore
					limitless possibilities and embark on a galactic journey that
					redefines reality.
				</p>

				<div className='relative w-[100px] h-[100px] md-w-[160px] md:h-[160px] mt-5'>
					<Image
						src={spacemen}
						alt='spacemen'
						width={160}
						height={160}
						className='animate-spin'
					/>
				</div>
			</div>
		</main>
	);
}
