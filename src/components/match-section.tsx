'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Pack } from '@/components/pack'

type Button = {
	id: number
	image: string
	packId: number
}

const packs: Pack[] = [
	{
		id: 1,
		name: 'Garden Fusion',
		image: '/garden-fusion-box.webp',
		buttonId: 1,
	},
	{
		id: 2,
		name: 'Summer Fusion',
		image: '/summer-fusion-box.webp',
		buttonId: 2,
	},
	{
		id: 3,
		name: 'Exotic Fusion',
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

export function MatchSection() {
	const [shuffledPacks, setShuffledPacks] = useState<Pack[]>([])
	const [shuffledButtons, setShuffledButtons] = useState<Button[]>([])
	const [activePackId, setActivePackId] = useState<number | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setShuffledPacks(shuffleArray(packs))
		setShuffledButtons(shuffleArray(buttons))
		setMounted(true)
	}, [])

	if (!mounted) return null

	function packClicked(packId: number) {
		if (activePackId === packId) {
			setActivePackId(null)
			return
		}
		if (activePackId) {
			return
		}
		setActivePackId(packId)
	}

	return (
		<div className='grid grid-cols-3 pt-12'>
			{Array.from({ length: 3 }).map((_, i) => {
				const pack = shuffledPacks[i]
				const button = shuffledButtons[i]
				return (
					<div
						key={i}
						className='flex flex-col flex-wrap items-center justify-center'
					>
						<div className='relative flex h-96 flex-col items-center'>
							<Pack
								pack={pack}
								activePackId={activePackId ?? 0}
								packClicked={packClicked}
								key={pack.id}
							/>
						</div>
						<div className='pt-12'>
							<Image
								src={button.image}
								alt={button.id.toString()}
								width={111}
								height={108}
							/>
						</div>
					</div>
				)
			})}
		</div>
	)
}
