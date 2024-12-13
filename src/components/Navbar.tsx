import Image from "next/image";

import Discord from "@/public/assets/discord.svg";
import Telegram from "@/public/assets/Telegram_2019_Logo.svg";

const Socials = [
	{
		name: "Discord",
		src: Discord,
	},
	{
		name: "Telegram",
		src: Telegram,
	},
];

export const Navbar = () => {
	return (
		<>
			<div className='fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5'>
				<h1 className='text-white text-[45px]'>
					NI
					<span className='font-thin'>STON</span>
					<span className='text-purple-500'>.</span>
				</h1>
				<div className='flex flex-row gap-5'>
					{Socials.map(social => (
						<Image
							key={social.name}
							src={social.src}
							alt={social.name}
							width={24}
							height={24}
						/>
					))}
				</div>
			</div>
		</>
	);
};
