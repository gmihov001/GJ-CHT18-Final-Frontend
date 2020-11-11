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
	const currentDate = "2018-11-01";

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

	//filter cannot be a standalone function, it needs to be a variable example: var newTodos =
	//after filtering the function we needed to set the new todos to the updated (setTodos) so it can show the new
	//list of labels without the item we deleted
	// };

	//   export default class Demo extends React.PureComponent {
	//   constructor(props) {
	//     super(props);

	//     this.state = {
	//       data: appointments,
	//     };
	//   }

	//   render() {
	//     const { data } = this.state;
	//TURN THIS CLASS INTO A HOOK IN ORDER TO MAKE DATE NAVIGATION EASIER

	return (
		<>
			<div className="input-container">
				<form onSubmit={e => e.preventDefault()}>
					<input type="text" name="event" value={singleEvent} onChange={handleChange} />
					<button onClick={handleClick}> Save </button>
				</form>
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
