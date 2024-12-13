"use client";

import { motion } from "framer-motion";

const TransitionVariants = {
	initial: {
		x: "100%",
		width: "100%",
	},
	animate: {
		x: "0%",
		width: "0%",
	},
	exit: {
		x: ["0%", "100%"],
		width: ["0%", "100%"],
	},
};

export const Transition = () => {
	return (
		<>
			<div>
				<motion.div
					className='fixed top-0 bottom-0 h-screen w-screen right-full z-[30] bg-purple-400'
					variants={TransitionVariants}
					initial='initial'
					exit='exit'
					animate='animate'
					transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
				/>
				<motion.div
					className='fixed top-0 bottom-0 h-screen w-screen right-full z-[20] bg-purple-500'
					variants={TransitionVariants}
					initial='initial'
					exit='exit'
					animate='animate'
					transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
				/>
				<motion.div
					className='fixed top-0 bottom-0 h-screen w-screen right-full z-[10] bg-purple-600'
					variants={TransitionVariants}
					initial='initial'
					exit='exit'
					animate='animate'
					transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
				/>
			</div>
		</>
	);
};
