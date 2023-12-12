import Image from 'next/image'
import React from 'react'

type Props = {
	children: React.ReactNode
}

export function ResultsMessage({ children }: Props) {
	return (
		<div className='relative z-20 flex flex-col items-center justify-center pt-12'>
			<div className='flex flex-col items-center'>
				<Image
					src='/marlboro-vista-logo-stacked.svg'
					alt='Marlboro Vista Logo'
					width={425}
					height={133}
					className='pb-16'
				/>
				<div className='rainbow-border w-[500px] rounded-3xl'>
					<div className='flex h-72 max-w-full items-center rounded-3xl bg-white text-center'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
