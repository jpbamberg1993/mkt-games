import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type Props = {
	isRunning: boolean
	timeLeft: number
	setTimeLeft: Dispatch<SetStateAction<number>>
	setIsRunning: (isRunning: boolean) => void
}

export function Stopwatch({
	isRunning,
	timeLeft,
	setTimeLeft,
	setIsRunning,
}: Props) {
	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (timeLeft === 0) {
			setIsRunning(false)
		}
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTimeLeft((timeLeft) => timeLeft - 1)
			}, 1000)
		} else {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isRunning, timeLeft, setTimeLeft, setIsRunning])

	const formattedTimeLeft = timeLeft.toString().padStart(2, '0')

	return (
		<div className='rainbow-border rounded-full'>
			<div className='w-64 items-center rounded-full bg-white px-3 py-2 font-sans text-5xl'>
				00:{formattedTimeLeft}
			</div>
		</div>
	)
}
