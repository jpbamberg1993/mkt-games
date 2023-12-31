export function WarningFooter() {
	return (
		<div className='fixed inset-x-0 bottom-0 z-20 flex h-[15vh] flex-col text-center'>
			<div className='flex h-full flex-1 items-center justify-center bg-white'>
				<h4 className='font-sans text-2xl font-bold'>
					PROHIBIDA SU VENTA A MENORES DE 18 AÑOS
				</h4>
			</div>
			<div className='flex h-full flex-1 items-center justify-center bg-black text-white'>
				<h4 className='font-sans text-3xl font-bold'>
					FUMAR CAUSA CÁNCER DE PULMÓN
				</h4>
			</div>
		</div>
	)
}
