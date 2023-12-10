export function getActiveImagePath(imagePath: string) {
	const imageParts = imagePath.split('.')
	return `${imageParts[0]}-active.${imageParts[1]}`
}

export function getErrorImagePath(imagePath: string) {
	const imageParts = imagePath.split('.')
	return `${imageParts[0]}-error.${imageParts[1]}`
}
