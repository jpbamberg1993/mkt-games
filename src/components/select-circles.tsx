import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getActiveImagePath } from '@/lib/image-functions'

export type Button = {
	id: number
	image: string
	packId: number
}

type Props = {
	button: Button
	buttonClicked: (buttonId: number) => void
	matchedIds: number[]
}

export function SelectCircles({ button, buttonClicked, matchedIds }: Props) {
	const [imageUrl, setImageUrl] = useState(button.image)

	useEffect(() => {
		let url = button.image
		if (matchedIds.includes(button.packId)) {
			url = getActiveImagePath(button.image)
		}
		setImageUrl(url)
	}, [button, matchedIds])

	return (
		<button
			onClick={() => buttonClicked(button.id)}
			className='border-none bg-transparent p-0'
		>
			<Image
				src={imageUrl}
				alt={button.id.toString()}
				width={111}
				height={108}
			/>
		</button>
	)
}
