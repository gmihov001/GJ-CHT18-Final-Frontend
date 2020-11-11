const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{ startDate: "2018-11-01T09:45", endDate: "2018-11-01T11:00", title: "Meeting" },
				{ startDate: "2018-11-01T12:00", endDate: "2018-11-01T13:00", title: "Go to a gym" },
				{ startDate: "2018-11-01T13:00", endDate: "2018-11-01T14:30", title: "Groceries" },
				{ startDate: "2018-11-01T15:00", endDate: "2018-11-01T15:30", title: "Run" }
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
