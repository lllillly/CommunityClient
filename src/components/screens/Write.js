import React from "react";
import styled from "styled-components";
import { C_Btn, D_Btn } from "../commonComponents";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 60px;
`;

const TextInput = styled.input`
  width: 640px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 0px 10px;

  &:focus {
    box-shadow: 2px 3px 3px #0b0b0b;
  }
`;

const TextArea = styled.textarea`
  width: 640px;
  height: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 10px;
  resize: none;

  &:focus {
    box-shadow: 2px 3px 3px #0b0b0b;
  }
`;

class Write extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      description: "",
    };
  }

  render() {
    const { title, author, description } = this.state;

    return (
      <Wrapper>
        <Title>({this.props.match.params.boardType})게시글 작성하기</Title>

        <TextInput
          name="title"
          value={title}
          type="text"
          placeholder="Title..."
          onChange={this._valueChangeHandler}
        />
        <TextInput
          name="author"
          value={author}
          type="text"
          placeholder="Author..."
          onChange={this._valueChangeHandler}
        />
        <TextArea
          name="description"
          value={description}
          placeholder="Description..."
          onChange={this._valueChangeHandler}
        />

        <Wrapper direction={`row`}>
          <C_Btn onClick={this._writeHandler}>작성하기</C_Btn>
          <D_Btn onClick={() => this.props.history.goBack()}>작성취소</D_Btn>
        </Wrapper>
      </Wrapper>
    );
  }

  _valueChangeHandler = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  _writeHandler = async () => {
    const { title, author, description } = this.state;

    if (!title || title.trim() === "") {
      alert("제목을 입력해주세요");
      return;
    }

    if (!author || title.trim() === "") {
      alert("작성자을 입력해주세요");
      return;
    }

    if (!description || title.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }

    const inputData = {
      title: title,
      author: author,
      description: description,
      type: this.props.match.params.boardType,
    };

    await axios.post("/api/writeBoard");
  };
}

export default Write;
