import React from 'react';

export interface IColorChangerProps {
    color: string;
    onChange(color: string): void;
}

export class ColorChanger extends React.Component<IColorChangerProps> {
    public render() {
        const {onChange, color} = this.props;
        return (
            <div>
                <label>type a new color</label>
                <input onChange={(e) => onChange(e.target.value)} value={color}/>
            </div>
        )
    }
}