import React from 'react'
import { WarningFooter } from '@/components/warning-footer'

export default function MatchGameLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-custom container relative mx-auto min-h-screen bg-[url('/match-background-gradient.webp')] bg-cover bg-no-repeat">
			<div className='absolute inset-0 z-10 bg-black bg-opacity-40'></div>
			{children}
			<WarningFooter />
		</div>
	)
}
