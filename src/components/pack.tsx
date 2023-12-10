import Image from 'next/image'
import { useEffect, useState } from 'react'

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
}

export function Pack({ pack, activePackId, packClicked }: Props) {
	const [imageUrl, setImageUrl] = useState(pack.image)

	useEffect(() => {
		let url = pack.image
		if (activePackId === pack.id) {
			const imageParts = pack.image.split('.')
			url = `${imageParts[0]}-active.${imageParts[1]}`
		}
		setImageUrl(url)
	}, [activePackId, pack])

	return (
		<>
			<Image
				src={imageUrl}
				alt={pack.name}
				width={540}
				height={700}
				onClick={() => packClicked(pack.id)}
			/>
			<h3 className='absolute bottom-0 w-1/2 break-words bg-opacity-50 pt-6 text-3xl text-white'>
				{pack.name}
			</h3>
		</>
	)
}
