import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getActiveImagePath } from '@/lib/image-functions'

export type Pack = {
	id: number
	name: string
	image: string
	buttonId: number
}

type Props = {
	pack: Pack
	activePackId: number
	packClicked: (packId: number) => void
	matchedIds: number[]
}

export function Pack({ pack, activePackId, packClicked, matchedIds }: Props) {
	const [imageUrl, setImageUrl] = useState(pack.image)

	useEffect(() => {
		let url = pack.image
		if (activePackId === pack.id || matchedIds.includes(pack.id)) {
			url = getActiveImagePath(pack.image)
		}
		setImageUrl(url)
	}, [activePackId, pack, matchedIds])

	return (
		<>
			<Image
				src={imageUrl}
				alt={pack.name}
				width={540}
				height={700}
				onClick={() => packClicked(pack.id)}
			/>
			<h3 className='absolute bottom-0 w-1/2 whitespace-nowrap bg-opacity-50 pt-6 text-2xl text-white'>
				{pack.name}
				<br />
				Fusion
			</h3>
		</>
	)
}
