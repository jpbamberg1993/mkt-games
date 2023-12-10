'use client'

import Image from 'next/image'
import { Stopwatch } from '@/components/stopwatch'
import { useState } from 'react'
import { MatchSection } from '@/components/match-section'

export default function MatchGame() {
	const [isRunning, setIsRunning] = useState<boolean>(false)
	const [timeLeft, setTimeLeft] = useState<number>(10)

	return (
		<div className='relative z-20 grid justify-items-center pt-24 text-center'>
			<Image
				src='/marlboro-vista-logo.svg'
				alt='Marlboro Vista Logo'
				width={700}
				height={300}
				className='mx-auto'
			/>
			<h2 className='mx-auto max-w-lg pb-16 pt-11 text-3xl text-white'>
				¡Conecta los sabores correctos con sus cajetillas!
			</h2>
			<button onClick={() => setIsRunning(!isRunning)}>
				<Stopwatch
					isRunning={isRunning}
					timeLeft={timeLeft}
					setTimeLeft={setTimeLeft}
					setIsRunning={setIsRunning}
				/>
			</button>
			<MatchSection isRunning={isRunning} />
		</div>
	)
}
