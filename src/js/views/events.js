import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Paper from "@material-ui/core/Paper";
//import Radio from '@material-ui/core/Radio';
//import RadioGroup from '@material-ui/core/RadioGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ViewState } from "@devexpress/dx-react-scheduler";

import {
	Scheduler,
	ViewSwitcher,
	DayView,
	WeekView,
	MonthView,
	Toolbar,
	DateNavigator,
	Appointments,
	TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";
//import { appointments } from "../../../demo-data/month-appointments";

import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export const Events = () => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [title, setTitle] = useState("");
	const currentDate = new Date();

	const [state, setState] = useState({
		title: "",
		date: "",
		time: "",
		dayOf: false,
		dayPrior: false,
		twoDaysPrior: false,
		weekPrior: false,
		twoWeekPrior: false
	});

	const [singleEvent, setSingleEvent] = useState();
	const [events, setEvents] = useState([]);

	const handleChange = e => {
		setSingleEvent(e.target.value);
	};
	const handleClick = e => {
		const newEvent = {
			title: title,
			startDate: startDate,
			notifications: {
				dayOf: false,
				dayPrior: false,
				twoDaysPrior: false,
				weekPrior: false,
				twoWeekPrior: false
			}
		};
		setEvents([...events, newEvent]);
		// 	fetch(
		// 		"https://3000-e602aabd-5ee2-4e3c-83ab-16569a08f1a5.ws-us02.gitpod.io/todos",
		// 		{
		// 			method: "POST",
		// 			body: JSON.stringify(singleTodo), // data can be `string` or {object}!
		// 			headers: {
		// 				"Content-Type": "application/json"
		// 			}
		// 		}
		// 	)
		// 		.then(res => res.json())
		// 		.then(response => setTodos(response))
		// 		.catch(error => console.error("Error", error));
		// 	setSingleTodo({ label: "" });
	};

	// const deleteTodo = id => {
	// 	fetch(
	// 		"https://3000-e602aabd-5ee2-4e3c-83ab-16569a08f1a5.ws-us02.gitpod.io/todos" +
	// 			"/" +
	// 			id,
	// 		{
	// 			method: "DELETE",
	// 			headers: {
	// 				"Content-Type": "application/json"
	// 			}
	// 		}
	// 	)
	// 		.then(function(response) {
	// 			if (!response.ok) {
	// 				throw Error(response.statusText);
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(function(responseAsJson) {
	// 			console.log("responseAsJson", responseAsJson);
	// 			setTodos(responseAsJson);
	// 		})
	// 		.catch(function(error) {
	// 			console.log("Looks like there was a problem: \n", error);
	// 		});

	return (
		<>
			<div className="input-container">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Title
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Date
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Time
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Day Of
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Day Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Two Days Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Week Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Two Weeks Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
				</div>
				<button className="btn btn-lg btn-primary px-5" onClick={handleClick}>
					{" "}
					Save{" "}
				</button>
			</div>

			{events.map((event, i) => {
				return (
					<div className="event" key={i}>
						{event.title}

						<button className="btn-delete" type="button" onClick={() => deleteTodo(i)}>
							X
						</button>
					</div>
				);
			})}
		</>
	);
};
