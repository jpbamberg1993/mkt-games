import Image from 'next/image'

export default function MatchGame() {
	return (
		<div className='relative z-20 pt-24 text-center'>
			<Image
				src='/marlboro-vista-logo.svg'
				alt='Marlboro Vista Logo'
				width={700}
				height={300}
				className='mx-auto'
			/>
			<h2 className='mx-auto max-w-lg pt-11 text-3xl text-white'>
				¡Conecta los sabores correctos con sus cajetillas!
			</h2>
		</div>
	)
}
