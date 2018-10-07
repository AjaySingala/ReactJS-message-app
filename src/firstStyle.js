import React, { Component } from 'react';

class FirstStyle extends Component {
    render() {
        const headerStyle = {
            color: '#ff0000',
            textDecoration: 'underline'
        }
        return (
            <div>
                <h2 style={headerStyle}>Hello World again!</h2>
                <h2 style={{ color: '#ff0000' }}>Hello World again!</h2>
                <hr />
            </div>
        );
    }
}

export default FirstStyle;
