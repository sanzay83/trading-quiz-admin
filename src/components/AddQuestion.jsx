import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddQuestion.scss";
import { API_URL } from "../config";

function AddQuestion() {
  const [id, setId] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [buysell, setBuySell] = useState("1");
  const navigate = useNavigate();

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/items`, {
        id,
        question,
        answer,
        buysell,
      });
      navigate("/questions");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-question-container">
      <h2>Add Question</h2>
      <form onSubmit={handleAddQuestion}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="buysell">Buy/Sell</label>
          <select
            onChange={(e) => setBuySell(e.target.value)}
            name="buysell"
            id="buysell"
          >
            <option value="1">Buy</option>
            <option value="0">Sell</option>
          </select>
        </div>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
}

export default AddQuestion;
