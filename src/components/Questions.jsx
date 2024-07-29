import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Questions.scss";
import { Link } from "react-router-dom";

function Questions() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchItems = async () => {
		try {
			const response = await axios.get("http://localhost:3000/easy/items");
			setItems(response.data);
			setLoading(false);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchItems();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:3000/items/${id}`);
		fetchItems();
	};

	return (
		<div className="item-list">
			<div className="title-section">
				<h2>Questions List</h2>
				<Link className="addQuestion" to="/addQuestion">
					Add Question
				</Link>
			</div>
			<div className="title-section">
				<div>ID</div>
				<div>Question</div> <div>Answer</div>
				<div>Answer</div> <div>Delete</div>
			</div>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<span>{item.id}</span>
						<span>
							<img className="item-image" src={item.question} alt="test" />
						</span>

						<span>
							<img className="item-image" src={item.answer} alt="test" />
						</span>
						<span>{item.buysell == 0 ? "Sell" : "Buy"}</span>
						<button onClick={() => handleDelete(item.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Questions;
