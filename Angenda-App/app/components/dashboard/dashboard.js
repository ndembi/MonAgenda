import React from 'react'
import { StyleSheet, Platform, Image, ScrollView, Text, View } from 'react-native'
import Header from '../header';
import TaskList from '../task-list';
import ButtonAddTask from '../button-add-task';

const taskList = [
    {
        id: 0,
        user: 'Fabien',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 1,
        user: 'Pauline',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'Terminé'
    },
    {
        id: 2,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 3,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 4,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 0,
        user: 'Fabien',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 1,
        user: 'Pauline',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'Terminé'
    },
    {
        id: 2,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 3,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 4,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    }, {
        id: 0,
        user: 'Fabien',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 1,
        user: 'Pauline',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'Terminé'
    },
    {
        id: 2,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 3,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 4,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    }, {
        id: 0,
        user: 'Fabien',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 1,
        user: 'Pauline',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'Terminé'
    },
    {
        id: 2,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 3,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 4,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    },
    {
        id: 5,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        status: 'En cours'
    }
];
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { taskList };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Header content="Super TaskList"/>
                <ScrollView>
                    <TaskList taskList={this.state.taskList}/>
                </ScrollView>
                <ButtonAddTask onPressCallBack={this.displayAddPrompt} />
            </View>
        );
    }
}
