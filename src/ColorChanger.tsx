import React from 'react';
import { IState } from './App';
import { connect } from 'react-redux';

export interface IColorChangerProps {
    color: string;
    changeColor(color: string): void;
}

const DumbColorChanger: React.FC<IColorChangerProps> = (props) => {
    const { changeColor, color } = props;
    return (
        <div>
            <label>type a new color</label>
            <input onChange={(e) => changeColor(e.target.value)} value={color} />
        </div>
    )
}

const mapStateToProps = (state: IState) => ({
    color: state.hairColor,
});

const mapDispatchToProps = (dispatch: any) => ({
    changeColor(color: string) {
        dispatch({
            type: 'CHANGE_COLOR',
            payload: {
                color,
            }
        })
    },
})

export const ColorChanger = connect(mapStateToProps, mapDispatchToProps)(DumbColorChanger);