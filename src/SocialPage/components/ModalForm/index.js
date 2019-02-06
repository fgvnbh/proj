import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {push, goBack} from 'react-router-redux';
import {put} from 'redux-saga/effects';
import styled from 'styled-components'

const OuterDiv = styled.div`
  position: fixed;
  left: 0%;
  top:0%;
  width:100%;
  height: 100%;
  background: gray;
  opacity: 0.5;
  z-index:990
`;
const InnerDiv = styled.div`
  position: fixed;
  left:40%;
  top:40%;
  border:2px solid black;
  background: white;
  opacity: 1;
  z-index:999
`;


class ModalContainer extends Component {
    constructor(props) {
        super(props);
        this.containerDiv = document.createElement("div");
        document.body.appendChild(this.containerDiv);
    }

    componentWillUnmount() {
        this.containerDiv.remove()
    }

    render() {
        const {ChildComponent} = this.props;
        return (
            ReactDOM.createPortal(
                <OuterDiv>
                    <InnerDiv>
                        {
                            ChildComponent ?
                                <ChildComponent {...this.props}/>
                                :
                                this.props.children}
                    </InnerDiv>
                </OuterDiv>,
                this.containerDiv
            )
        )
    }
}

export default ModalContainer;
