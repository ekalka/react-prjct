import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { FC } from 'react'
import { IPdfData } from '../../interfaces/pdfform-type'
import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#E4E4E4'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
})
const MyDocument: FC<IPdfData> = ({ name, picture }) => {
	return (
		<>
			<Document>
				<Page size='A4' style={styles.page} wrap>
					<View style={styles.section}>
						<Text>Title</Text>
					</View>
					<View style={styles.section}>
						<Text>{name}</Text>
					</View>

					<View style={styles.section}>
						{picture && <Image source={picture[0]} />}
					</View>
				</Page>
			</Document>
		</>
	)
}

export default MyDocument