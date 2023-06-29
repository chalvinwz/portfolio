import { Button } from '@chakra-ui/react'
import { ArrowDownToLine } from 'lucide-react'
import { saveAs } from 'file-saver'

const DownloadResume = () => {
	function handleDownloadResume() {
		saveAs('/resume.pdf', 'image.jpg')
	}

	return (
		<Button
			onClick={handleDownloadResume}
			rightIcon={<ArrowDownToLine size={16} />}
			colorScheme='blue'
			variant='outline'
			maxW={28}
		>
			Resume
		</Button>
	)
}

export default DownloadResume
