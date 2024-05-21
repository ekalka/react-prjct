import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { FC } from "react";
import { IPdfData } from "../../interfaces/pdfform-type";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: 12,  // Установим размер шрифта
  },
  imageSection: {
    margin: 10,
    padding: 10,
    alignItems: 'center',  // Центрирование изображения
  },
  image: {
    width: 150,
    height: 150,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});

const MyDocument: FC<IPdfData> = ({ name, email, age, address, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.label}>Text:</Text>
          <Text>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Age:</Text>
          <Text>{age}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Address:</Text>
          <Text>{address}</Text>
        </View>
        {picture && picture[0] && (
          <View style={styles.imageSection}>
            <Image style={styles.image} src={URL.createObjectURL(picture[0])} />
          </View>
        )}
      </Page>
    </Document>
  );
};

export default MyDocument;
