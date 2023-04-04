import { Page, Text, View, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Outfit',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/outfit/v10/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.ttf'
        },
        {
            src: 'https://fonts.gstatic.com/s/outfit/v10/QGYyz_MVcBeNP4NjuGObqx1XmO1I4W61C4G-EiAou6Y.ttf',
            fontWeight: 'light'
        },
        {
            src: 'https://fonts.gstatic.com/s/outfit/v10/QGYyz_MVcBeNP4NjuGObqx1XmO1I4QK1C4G-EiAou6Y.ttf',
            fontWeight: 'medium'
        }
    ]
})

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'Outfit',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});
  
// Create Document Component
const Remision = () => {
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="LETTER" style={styles.page}>
                    <View style={styles.header}>
                        <Text>Logo</Text>
                        <View>
                            <Text style={{fontWeight: 'medium'}}>Remisión No. 0003</Text>
                            <Text style={{fontSize: 9, color: '#777777'}}>Fecha</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Remision