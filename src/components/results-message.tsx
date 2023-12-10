import Image from 'next/image'
import React from 'react'

type Props = {
	children: React.ReactNode
}

export function ResultsMessage({ children }: Props) {
	return (
		<div className='relative z-20 flex h-screen flex-col items-center justify-center'>
			<div className='flex flex-col items-center'>
				<Image
					src='/marlboro-vista-logo-stacked.svg'
					alt='Marlboro Vista Logo'
					width={445}
					height={133}
					className='pb-16'
				/>
				<div className='rainbow-border w-[567px] rounded-3xl'>
					<div className='flex h-72 max-w-full items-center rounded-3xl bg-white px-10 text-center'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}