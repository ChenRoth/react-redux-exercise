import React from 'react';

export interface INameChangerProps {
    name: string;
    onChange(name: string): void;
}

export class NameChanger extends React.Component<INameChangerProps> {
    public render() {
        const {onChange, name} = this.props;
        return (
            <div>
                <label>type a new name</label>
                <input onChange={(e) => onChange(e.target.value)} value={name}/>
            </div>
        )
    }
}