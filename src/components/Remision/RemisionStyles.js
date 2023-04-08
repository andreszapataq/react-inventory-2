import { StyleSheet, Font } from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
    viewer: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    page: {
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'Outfit',
        padding: 40
    },
    textTitle_s: {
        fontSize: 10,
        color: '#777777'
    },
    textTitle_m: {
        fontSize: 11,
        color: '#777777'
    },
    textTitle_xl: {
        fontSize: 17,
        fontWeight: 'medium'
    },
    textInfo_xs: {
        fontSize: 9
    },
    textInfo_s: {
        fontSize: 10
    },
    textInfo_m: {
        fontSize: 11
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 13
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    divider: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#777777',
        marginBottom: 13
    },
    datosRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 13
    },
    datosColumn_1: {
        flexBasis: '40%'
    },
    datosColumns: {
        flexBasis: '22%'
    },
    menuBar: {
        width: '100%',
        height: 23,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        marginBottom: 13
    },
    itemRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 13
    },
    itemColumn: {
        flexBasis: '8%'
    },
});

export default styles