import React from 'react'
import { StyleSheet, Platform, Image, ScrollView, Text, View } from 'react-native'
import Header from '../header';
import TaskList from '../task-list';
import ButtonAddTask from '../button-add-task';
import MenuTask from '../menu-task';

const taskList = [
    {
        id: 0,
        user: 'Fabien',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        description: 'faire ménage',
        status: 'En cours'
    },
    {
        id: 1,
        user: 'Pauline',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        description: 'regarder la tv',
        status: 'Terminé'
    },
    {
        id: 2,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        description: 'appeler',
        status: 'En cours'
    },
    {
        id: 3,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        description: 'aller voir',
        status: 'En cours'
    },
    {
        id: 4,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        description: 'rib',
        status: 'En cours'
    },
    {
        id: 5,
        user: 'Maman',
        periode: '01/04/2018 08:50 - 01/04/2018 09h10',
        description: 'comment ça tu ne l\'a pas appelé',
        status: 'En cours'
    }
];
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { taskList };
    }
    displayMenutask = (taskDescription) => {
        console.log("OnPRESS", taskDescription);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Header content="Super TaskList"/>
                <ScrollView>
                    <TaskList onPressCallBack={this.displayMenutask} taskList={this.state.taskList}/>
                </ScrollView>
                <MenuTask />
                <ButtonAddTask onPressCallBack={this.displayAddPrompt} />
            </View>
        );
    }
}
