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
                            <Text style={styles.textTitle_xl}>Remisión No. 0003</Text>
                            <Text style={styles.textTitle_s}>Fecha</Text>
                            <View style={styles.headerRow}>
                                <Text style={styles.textInfo_s}>16 marzo 2023</Text>
                                <Text style={styles.textInfo_s}>Pag. 1/1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.datosRow}>
                        <View style={styles.datosColumn_1}>
                            <Text style={styles.textTitle_m}>Cliente</Text>
                            <Text style={styles.textInfo_m}>Implameq S.A.S.</Text>
                        </View>
                        <View style={styles.datosColumns}>
                            <Text style={styles.textTitle_m}>NIT</Text>
                            <Text style={styles.textInfo_m}>815.207.937-1</Text>
                        </View>
                        <View style={styles.datosColumns}>
                            <Text style={styles.textTitle_m}>Ciudad y Departamento</Text>
                            <Text style={styles.textInfo_m}>Cali, Valle</Text>
                        </View>
                    </View>
                    <View style={styles.datosRow}>
                        <View style={styles.datosColumn_1}>
                            <Text style={styles.textTitle_m}>Paciente</Text>
                            <Text style={styles.textInfo_m}>Víctor Andrés Villanueva Camacho</Text>
                        </View>
                        <View style={styles.datosColumns}>
                            <Text style={styles.textTitle_m}>No. ID</Text>
                            <Text style={styles.textInfo_m}>1001975331</Text>
                        </View>
                        <View style={styles.datosColumns}>

                        </View>
                    </View>
                    <View style={styles.menuBar}>
                        <Text style={styles.textTitle_s1}>Código</Text>
                        <Text style={styles.textTitle_s2}>Descripción</Text>
                        <Text style={styles.textTitle_s4}>Lote</Text>
                        <Text style={styles.textTitle_s3}>Fecha de Vencimiento</Text>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.itemRow}>
                            <Text style={styles.textInfo_xs1}>AT680FD</Text>
                            <Text style={styles.textInfo_xs2}>DBM Putty 10.0 CC</Text>
                            <Text style={styles.textInfo_xs3}>LET28033345-17</Text>
                            <Text style={styles.textInfo_xs4}>23/03/2025</Text>
                        </View>
                        <View style={styles.itemRow}>
                            <Text style={styles.textInfo_xs1}>AT680FD</Text>
                            <Text style={styles.textInfo_xs2}>DBM Putty 10.0 CC</Text>
                            <Text style={styles.textInfo_xs3}>MORA32727425-28</Text>
                            <Text style={styles.textInfo_xs4}>25/07/2025</Text>
                        </View>
                        <View style={styles.itemRow}>
                            <Text style={styles.textInfo_xs1}>AT680FD</Text>
                            <Text style={styles.textInfo_xs2}>DBM Putty 10.0 CC</Text>
                            <Text style={styles.textInfo_xs3}>MORA32727425-29</Text>
                            <Text style={styles.textInfo_xs4}>25/07/2025</Text>
                        </View>
                    </View>
                    <View style={styles.preFooter}>
                        <Text>Logo Ness</Text>
                        <Text>Total Items</Text>
                        <Text>Cuadro Firma</Text>
                    </View>
                    <View style={styles.divider} />
                    <View>
                        <Text style={styles.textFooter}>Calle 5 # 66B - 75 Ofc. 208, Centro Empresarial Limonar  Tel. (602) 345-1906</Text>
                        <Text style={styles.textFooter}>Cali - Valle</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Remision