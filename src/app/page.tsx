import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
				<div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
					<Link
						className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
						href={{ pathname: '/match-game' }}
						rel='match button to image game'
					>
						Match Game
					</Link>
				</div>
			</div>
		</main>
	)
}
