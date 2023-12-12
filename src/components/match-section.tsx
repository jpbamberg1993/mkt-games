import { useEffect, useState } from 'react'
import { Pack } from '@/components/pack'
import { Button, SelectCircles } from '@/components/select-circles'
import { PackSkeleton } from '@/components/pack-skeleton'

const packs: Pack[] = [
	{
		id: 1,
		name: 'Garden',
		image: '/garden-fusion-box.webp',
		buttonId: 1,
	},
	{
		id: 2,
		name: 'Summer',
		image: '/summer-fusion-box.webp',
		buttonId: 2,
	},
	{
		id: 3,
		name: 'Exotic',
		image: '/exotic-fusion-box.webp',
		buttonId: 3,
	},
]

const buttons: Button[] = [
	{
		id: 1,
		image: '/garden-fusion-button.webp',
		packId: 1,
	},
	{
		id: 2,
		image: '/summer-fusion-button.webp',
		packId: 2,
	},
	{
		id: 3,
		image: '/exotic-fusion-button.webp',
		packId: 3,
	},
]

function shuffleArray<T>(array: T[]): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

type Props = {
	isRunning: boolean
	timeLeft: number
	setUserWon: (userWon: boolean) => void
}

export function MatchSection({ isRunning, timeLeft, setUserWon }: Props) {
	const [shuffledPacks, setShuffledPacks] = useState<Pack[]>([])
	const [shuffledButtons, setShuffledButtons] = useState<Button[]>([])
	const [activePackId, setActivePackId] = useState<number | null>(null)
	const [mounted, setMounted] = useState(false)
	const [matchedIds, setMatchedIds] = useState<number[]>([])

	useEffect(() => {
		setShuffledPacks(shuffleArray(packs))
		setShuffledButtons(shuffleArray(buttons))
		setMounted(true)
	}, [])

	useEffect(() => {
		if (matchedIds.length === 3) {
			setUserWon(true)
		}

		if (timeLeft <= 0) {
			if (matchedIds.length === 3) {
				setUserWon(true)
			} else {
				setUserWon(false)
			}
		}
	}, [matchedIds, timeLeft, setUserWon])

	if (!mounted) {
		return (
			<>
				<PackSkeleton />
				<PackSkeleton />
				<PackSkeleton />
			</>
		)
	}

	function packClicked(packId: number) {
		if (!isRunning) {
			return
		}
		if (activePackId === packId) {
			setActivePackId(null)
			return
		}
		if (activePackId) {
			return
		}
		setActivePackId(packId)
	}

	function buttonClicked(buttonId: number) {
		if (!activePackId) {
			return
		}
		const pack = packs.find((p) => p.id === activePackId)
		if (!pack) {
			return
		}
		if (pack.buttonId === buttonId) {
			console.log('correct')
			setMatchedIds([...matchedIds, pack.id])
		} else {
			console.log('incorrect')
		}
		setActivePackId(null)
	}

	return (
		<div className='grid grid-cols-3 pt-5'>
			{Array.from({ length: 3 }).map((_, i) => {
				const pack = shuffledPacks[i]
				const button = shuffledButtons[i]
				return (
					<div
						key={i}
						className='flex flex-col flex-wrap items-center justify-center'
					>
						<div className='relative flex h-72 flex-col items-center'>
							<Pack
								pack={pack}
								activePackId={activePackId ?? 0}
								packClicked={packClicked}
								matchedIds={matchedIds}
								key={pack.id}
							/>
						</div>
						<div className='pt-4'>
							<SelectCircles
								button={button}
								buttonClicked={buttonClicked}
								matchedIds={matchedIds}
								key={button.id}
							/>
						</div>
					</div>
				)
			})}
		</div>
	)
}
