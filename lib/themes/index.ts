import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { config } from './config'
import { styles } from './styles'

const override = {
	config,
	colors,
	styles,
	fonts: {},
}

export const theme = extendTheme(override)
