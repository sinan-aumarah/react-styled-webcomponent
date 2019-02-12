import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
color: black;
text-align: center;
`;

const MyButton = styled.button`
font-size: 26px;`;

const PropValueText = styled.span`
color: blue;
padding-right: 10px`;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicksCounter: 0, focusCounter: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            clicksCounter: state.clicksCounter + 1
        }));
    }

    render() {
        return (
            <Wrapper>
                <div>App props: {Object.keys(this.props).map(key => <PropValueText
                    key={key}>{this.props[key]} </PropValueText>)}</div>

                <MyButton onClick={this.handleClick}>
                    Click me: {this.state.clicksCounter}
                </MyButton>
            </Wrapper>
        );
    }
}

export default App;


