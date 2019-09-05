import React from 'react';
import { connect } from 'react-redux';
import { IState, IAction } from './App';

export interface INameChangerProps {
    name: string;
    changeName(name: string): void;
}

class DumbNameChanger extends React.Component<INameChangerProps> {
    public render() {
        const { name, changeName } = this.props;
        return (
            <div>
                <label>type a new name</label>
                <input onChange={e => {
                    const name = e.target.value;
                    changeName(name);
                }} 
                value={name} />
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => ({
    name: state.name,
});

const mapDispatchToProps = (dispatch: any) => ({
    changeName(name: string) {
        const action: IAction = {
            type: 'CHANGE_NAME',
            payload: {
                name,
            }
        };
        dispatch(action);
    }
})

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export const NameChanger = withRedux(DumbNameChanger);
