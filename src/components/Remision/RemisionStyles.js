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
    textTitle_s: {
        fontSize: 10,
        color: '#777777'
    },
    textInfo_s: {
        fontSize: 10
    },
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
    headerOneRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default styles