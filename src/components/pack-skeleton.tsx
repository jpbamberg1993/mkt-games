export function PackSkeleton() {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<div className='flex flex-col items-center justify-center'>
				<div className='flex h-32 w-32 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-800'></div>
				<div className='mt-4 flex h-4 w-32 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-800'></div>
				<div className='mt-2 flex h-4 w-32 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-800'></div>
				<div className='mt-2 flex h-4 w-32 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-800'></div>
				<div className='mt-2 flex h-4 w-32 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-800'></div>
			</div>
		</div>
	)
}
