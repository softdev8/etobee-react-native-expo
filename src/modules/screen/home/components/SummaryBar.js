import React, { PropTypes } from 'react'
import { View, Dimensions } from 'react-native'

import SummaryItem from './SummaryItem'
import Icons from '@assets/icons'
import StyleSheet from 'react-native-extended-stylesheet'

const SummaryBar = ({ onProgress, delivered, problems }) => (
    <View style={styles.container}>
        <SummaryItem
            style={styles.item}
            count={onProgress}
            icon={Icons.summaryOnProgress}
            text={"Sedang di Proses"}
        />
        <View style={styles.verticalDivider} />
        <SummaryItem
            style={styles.item}
            count={delivered}
            icon={Icons.summaryDelivered}
            text={"Sudah Terkirim"}
        />
        <View style={styles.verticalDivider} />
        <SummaryItem
            style={styles.item}
            count={problems}
            icon={Icons.summaryProblem}
            text={"Kendala di Proses"}
        />
    </View>
)

SummaryBar.proptypes = {
    onProgress: PropTypes.number.isRequired,
    delivered: PropTypes.number.isRequired,
    problems: PropTypes.number.isRequired
}

const itemWidth = Dimensions.get('window').width / 3

const styles = StyleSheet.create({
    item: {
        width: itemWidth,
        height: 80,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 14,
        paddingTop: 14
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    verticalDivider: {
        width: 1,
        height: 40,
        backgroundColor: '$black',
        opacity: 0.25
    }
})

export default SummaryBar