import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TableCell extends React.Component {
    render() {
        return (
            <div className={`sortableTable__cell ${this.props.cellClassName}`}>
                {this.props.content}
            </div>
        )
    }
}


class TableRow extends React.Component {
    render() {
        const rowCells = this.props.rowData.map(cellContent => {
            return <TableCell content={cellContent} cellClassName={this.props.cellClassName}/>
        });
        return (
            <div className="sortableTable__row">
				{rowCells}
            </div>
        )
    }
}

class TableBody extends React.Component {
    render() {
    	const bodyRows = this.props.data.map(row => {
    		return <TableRow rowData = {Object.values(row)} />
		})

        return (
        	<div class="sortableTable__body">
				{bodyRows}
			</div>
        )
    }
}

class TableHeader extends React.Component {
    render() {
        const headerRowData = Object.keys(this.props.data[0]);
        return (
            <div className="sortableTable__header">
                <TableRow rowData={headerRowData} cellClassName="sortableTable__cell--header" />
            </div>
        )
    }
}

class SortableTable extends React.Component {
    render() {
        return (
        	<div className="sortableTable">
				<TableHeader data={this.props.data} />
				<TableBody data={this.props.data} />
			</div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {name: 'Kasparas', play: 100, win: 40, lost:60, ELO: 1100},
                {name: 'Tomas', play: 100, win: 40, lost:60, ELO: 1100},
                {name: 'Karolis', play: 100, win: 40, lost:60, ELO: 1100},
                {name: 'Povilas', play: 100, win: 40, lost:60, ELO: 1100},
                {name: 'Bobas', play: 100, win: 40, lost:60, ELO: 1100},
            ]
        }
    }
    render() {
        return(
            <SortableTable data={this.state.data} />
        )
    }
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  