import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Header } from './components/header';
import { Main } from './containers/main';
import { addNewTask, deleteTask, editTask, findLastToEdit, editOnChangeIme, editOnChangeProcenjenoVreme, editOnChangeOpis,  editOnChangeHours, editOnChangeMinutes, editOnChangeSeconds, stopwatchIncrement} from './actions/taskActions';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />       
        <Main 
          tasks={this.props.task.tasks}
          lastToEdit={this.props.task.lastToEdit}
          editIme={this.props.task.editIme}
          editOpis={this.props.task.editOpis}
          editProcenjenoVreme={this.props.task.editProcenjenoVreme}
          editSeconds={this.props.task.editSeconds}
          editMinutes={this.props.task.editMinutes}
          editHours={this.props.task.editHours}
          editVreme={this.props.task.editVreme}
          findLastToEdit={this.props.findLastToEdit}
          addNewTask={this.props.addNewTask}
          deleteTask={this.props.deleteTask}
          editTask={this.props.editTask}
          editOnChangeIme={this.props.editOnChangeIme}
          editOnChangeOpis={this.props.editOnChangeOpis}
          editOnChangeProcenjenoVreme={this.props.editOnChangeProcenjenoVreme}
          getSeconds={this.props.getSeconds}
          getMinutes={this.props.getMinutes}
          getHours={this.props.getHours}
          editOnChangeSeconds={this.props.editOnChangeSeconds}
          editOnChangeMinutes={this.props.editOnChangeMinutes}
          editOnChangeHours={this.props.editOnChangeHours}
          stopwatchIncrement={this.props.stopwatchIncrement}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (task) => {
      dispatch(addNewTask(task));
    },

    deleteTask: (index) => {
      dispatch(deleteTask(index));
    },

    editTask: (task, index) => {
      dispatch(editTask(task, index));
    },

    findLastToEdit: (index) => {
      dispatch(findLastToEdit(index))
    },

    stopwatchIncrement: (index) => {
      dispatch(stopwatchIncrement(index))
    },

    editOnChangeIme: (event) => {
      dispatch(editOnChangeIme(event))
    },

    editOnChangeOpis: (event) => {
      dispatch(editOnChangeOpis(event))
    },

    editOnChangeProcenjenoVreme: (event) => {
      dispatch(editOnChangeProcenjenoVreme(event))
    },

    editOnChangeSeconds: (event) => {
      dispatch(editOnChangeSeconds(event))
    },

    editOnChangeMinutes: (event) => {
      dispatch(editOnChangeMinutes(event))
    },

    editOnChangeHours: (event) => {
      dispatch(editOnChangeHours(event))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); 

