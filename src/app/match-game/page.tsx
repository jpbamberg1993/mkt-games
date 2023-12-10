'use client'

import Image from 'next/image'
import { Stopwatch } from '@/components/stopwatch'
import React, { useState } from 'react'
import { MatchSection } from '@/components/match-section'
import { ResultsMessage } from '@/components/results-message'

export default function MatchGame() {
	const [isRunning, setIsRunning] = useState<boolean>(false)
	const [timeLeft, setTimeLeft] = useState<number>(10)
	const [userWon, setUserWon] = useState<boolean | null>(null)

	if (userWon === true) {
		return (
			<ResultsMessage>
				<h2 className='text-6xl'>¡FELICIDADES, GANASTE!</h2>
			</ResultsMessage>
		)
	}

	if (userWon === false) {
		return (
			<ResultsMessage>
				<div>
					<h4 className='pb-3 text-3xl'>SE ACABÓ EL TIEMPO,</h4>
					<h2 className='text-6xl'>¡SUERTE PARA LA PRÓXIMA!!</h2>
				</div>
			</ResultsMessage>
		)
	}

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
			<button
				onClick={() => setIsRunning(!isRunning)}
				className='m-0 border-none bg-none p-0'
			>
				<Stopwatch
					isRunning={isRunning}
					timeLeft={timeLeft}
					setTimeLeft={setTimeLeft}
					setIsRunning={setIsRunning}
				/>
			</button>
			<MatchSection
				isRunning={isRunning}
				timeLeft={timeLeft}
				setUserWon={setUserWon}
			/>
		</div>
	)
}
