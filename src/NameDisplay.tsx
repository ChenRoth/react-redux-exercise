import React from 'react';
import { IState } from './App';
import { connect } from 'react-redux';

const DumbNameDisplay = ({name}: {name: string}) =>
    <div>
        <label>{name}</label>
    </div>


const mapStateToProps = (state: IState) => ({
    name: state.name
});

export const NameDisplay = connect(mapStateToProps)(DumbNameDisplay);