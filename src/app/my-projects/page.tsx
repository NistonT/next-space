import { ProjectsSlider } from "@/components/ProjectSlider";

function Page() {
	return (
		<>
			<div className='flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]'>
				<div className='flex flex-col gap-3'>
					<h1 className='text-[50px] text-white font-semibold'>
						My space<span className='text-purple-500'>.</span>
					</h1>
					<p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						ipsam repudiandae numquam voluptates unde et inventore itaque ipsa,
						maiores illo totam, laborum animi perferendis, vero fugiat iusto
						tempora placeat doloribus.
					</p>
				</div>

				<ProjectsSlider />
			</div>
		</>
	);
}

export default Page;
