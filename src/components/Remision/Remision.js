import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';
import LogoVive from '../Icons/Logo/LogoVive'
import styles from './RemisionStyles';

const Remision = () => {
    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="LETTER" style={styles.page}>
                    <View style={styles.header}>
                        <LogoVive />
                        <View>
                            <Text style={{fontWeight: 'medium'}}>Remisión No. 0003</Text>
                            <Text style={styles.textTitle_s}>Fecha</Text>
                            <View style={styles.headerOneRow}>
                                <Text style={styles.textInfo_s}>16 marzo 2023</Text>
                                <Text style={styles.textInfo_s}>Pag. 1/1</Text>
                            </View>
                        </View>
                    </View>
                    <View></View>
                    <View style={styles.section}>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Remision