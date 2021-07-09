import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // Commons Style
    appTitle: {
        fontSize: 22,
        color: 'snow'
    },
    headerBackgroundColor: {
        backgroundColor: '#075E54',
    },

    // Tabs
    tabBarUnderLine: {
    height: 2,
    },

    tabText: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    // Badge Style
    badge: {
        height: 24,
        backgroundColor: '#ECE5DD',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    },

    badgeText: {
        fontSize: 12,
        color: '#075E54',
    },

    //Chats style
    badgeChats: {
        backgroundColor: '#25D366',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        height: 24,
        marginTop: 4,
    },

    badgeTextChats: {
        fontSize: 12,
        color: 'snow',
    },

    fabColor: {
        backgroundColor: '#25D366',
    },

    // Status style
    addStatusIcon: {
        color: '#25D366',
        alignSelf: 'flex-end',
        position: 'absolute',
        marginLeft: 40,
        bottom: -5,
        width: 20,
        fontSize: 20
    },

    listItemDivider: {
        marginTop: 10,
    },

    fabColorStatus: {
        backgroundColor: '#E7FAD7',
        top: 460,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    badgeStatus: {
        height: 65,
        borderWidth: 2.5,
        borderColor: "#128C7E",
        borderRadius: 65,
        flexWrap: 'nowrap',
        backgroundColor: 'white'

    },

    badgeStatusView: {
        height: 65,
        borderWidth: 2.5,
        borderColor: "#B6B3AF",
        borderRadius: 65,
        flexWrap: 'nowrap',
        backgroundColor: 'white'

    },

    // Thumbnail style
    thumbnailBorder: {
        margin: -4,
        marginTop: 1,
        marginBottom: 0.8
    },

    // Call style
    iconCall: {
        color: '#075E54',
        top: 10,
        fontSize: 30
    },
    iconCallLeft: {
        fontSize: 20,
        top: 2,
        color: '#25D366'
    },

    iconCallLeftReject: {
        fontSize: 20,
        top: 2,
        color: 'red'
    },

    viewCall: {
        flex: 1,
        flexDirection: 'row',
    },

    textCall: {
        left: 10,
        top: 1
    },

    // Footer Style

    footerContent: {
        color: '#5E5C58',
        top:20,
        fontWeight: 'bold'
    }
});