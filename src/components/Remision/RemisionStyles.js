import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
    family: 'Outfit',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/outfit/v10/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.ttf'
        },
        {
            src: 'https://fonts.gstatic.com/s/outfit/v10/QGYyz_MVcBeNP4NjuGObqx1XmO1I4bC1C4G-EiAou6Y.ttf',
            fontWeight: 'extralight'
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
        padding: '40px 40px 30px'
    },
    textTitle_xs: {
        fontSize: 7,
        fontWeight: 'extralight',
        color: '#B5B5B5',
        marginBottom: 2
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
    /* textInfo_xs: {
        fontSize: 9
    }, */
    textInfo_s: {
        fontSize: 10
    },
    textInfo_m: {
        fontSize: 11
    },
    textFooter: {
        fontSize: 10,
        color: '#777777',
        textAlign: 'center'
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
        marginBottom: 8
    },
    textTitle_s1: {
        fontSize: 10,
        color: '#777777',
        flexBasis: '13%'
    },
    textTitle_s2: {
        fontSize: 10,
        color: '#777777',
        flexBasis: '35%'
    },
    textTitle_s3: {
        fontSize: 10,
        color: '#777777',
        flexBasis: '18%'
    },
    textTitle_s4: {
        fontSize: 10,
        color: '#777777',
        flexBasis: '18%'
    },
    textInfo_xs1: {
        fontSize: 9,
        flexBasis: '13%'
    },
    textInfo_xs2: {
        fontSize: 9,
        flexBasis: '35%'
    },
    textInfo_xs3: {
        fontSize: 9,
        flexBasis: '18%'
    },
    textInfo_xs4: {
        fontSize: 9,
        flexBasis: '18%',
        textAlign: 'right'
    },
    mainView: {
        height: '52%'
    },
    preFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 13
    },
    poweredBy: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    signatureBox: {
        width: 224,
        height: 98,
        border: '0.5px solid #777777'
    }
});

export default styles