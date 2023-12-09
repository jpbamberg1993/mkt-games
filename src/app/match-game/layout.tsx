import React from 'react'

export default function MatchGameLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-custom container mx-auto min-h-screen bg-[url('/match-background-gradient.webp')] bg-cover bg-no-repeat">
			<div className='absolute inset-0 bg-black bg-opacity-40'></div>
			{children}
		</div>
	)
}
