import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Select extends React.PureComponent {
    render(){
        const availablePlayers = this.props.data.map(player => {
			return !player[this.props.filter] ?
				<option value={player.id} key={player.id}>{player.name}</option>
				: null;
		});

        return (
            <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                {availablePlayers}
            </select>
        );
    }
}

class TableCell extends React.PureComponent {
    render() {
    	// Temporarily showing the "Winner and Loser" object values for easier debugging
    	let backgroundColor = this.props.content === 'true' ? 'green':'transparent';

        return (
            <div style={{background: backgroundColor}} className={`sortableTable__cell ${this.props.cellClassName}`}>
                {this.props.content}
            </div>
        );
    }
}


class TableRow extends React.PureComponent {
    render() {
        const rowCells = this.props.rowData.map((cellContent, index) => {
            return <TableCell
				// Use a combination of 3 adjacent cell content to form an unique key
				key={`${this.props.rowData[index]}${this.props.rowData[index-1]}${this.props.rowData[index]}`}
				content={cellContent.toString()}
				cellClassName={this.props.cellClassName}/>;
        });
        return (
            <div className="sortableTable__row">
				{rowCells}
            </div>
        );
    }
}

class TableBody extends React.PureComponent {
    render() {
    	const bodyRows = this.props.data.map(row => {
    		return <TableRow key={row.id} rowData={Object.values(row)} />;
		});

        return (
        	<div className="sortableTable__body">
				{bodyRows}
			</div>
        );
    }
}

class TableHeader extends React.PureComponent {
    render() {
    	// Select any Object from Array and use it's keys as table header elements
        const headerRowData = Object.keys(this.props.data[0]);
        return (
            <div className="sortableTable__header">
                <TableRow key="" rowData={headerRowData} cellClassName="sortableTable__cell--header" />
            </div>
        );
    }
}

class SortableTable extends React.PureComponent {
    render() {
        return (
        	<div className="sortableTable">
				<TableHeader data={this.props.data} />
				<TableBody data={this.props.data} />
			</div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
			data: [
				{id: 1, name: 'Kasparas', play: 100, win: 40, lost: 60, ELO: 1100, winner: true, loser: false}, // ID is the Array index
				{id: 2, name: 'Tomas', play: 100, win: 40, lost: 60, ELO: 1100, winner: false, loser: true},
				{id: 3, name: 'Karolis', play: 100, win: 40, lost: 60, ELO: 1100, winner: false, loser: false},
				{id: 4, name: 'Povilas', play: 100, win: 40, lost: 60, ELO: 1100, winner: false, loser: false},
				{id: 5, name: 'Bobas', play: 100, win: 40, lost: 60, ELO: 1100, winner: false, loser: false},
			],
            selectedPlayers: []
		};

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount() {
		//this.fetchData();
    }

    handleSelectChange(event) {
    	const target = event.target;
    	const value = Number(target.value);
    	const name = target.name;

    	const modifiedData = this.state.data.slice();

    	console.log(
    		`target:${target},
    		 value:${value},
    		 name:${name},
    		`
		);

		console.log(modifiedData);
		//console.log(modifiedData.find((player) => player.id === 2).name);

    	if (name === 'winnerSelect') {
			modifiedData.find((player) => player.winner === true).winner = false; // Remove past winner
			modifiedData.find((player) => player.id === value).winner = true;
		} else if (name === 'loserSelect') {
			modifiedData.find((player) => player.loser === true).loser = false; // Remove past loser
			modifiedData.find((player) => player.id === value).loser = true;
		}

    	this.setState({
			data: modifiedData
		});
	}

    render() {
        return(
            this.state.data !== undefined ?
				<div className="container">
					<div className="matchControls">
						<Select
							data={this.state.data}
							name="winnerSelect"
							filter="loser"
							onChange={this.handleSelectChange}
							value={this.state.data.find((player) => player.winner === true).id}
						/>
						<Select
							data={this.state.data}
							name="loserSelect"
							filter="winner"
							onChange={this.handleSelectChange}
							value={this.state.data.find((player) => player.loser === true).id}
						/>
					</div>
					<SortableTable data={this.state.data}/>
				</div>
			: null
        );
    }
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );