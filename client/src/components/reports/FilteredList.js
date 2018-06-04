import React, {Component} from 'react';
import ReportsList from './ReportsList';

export default class FilteredList extends Component {
    constructor(){
        super();
        this.state = {
            initialItems: [
                "Inventory Quality Report",
                "Executive Dashboard",
                "Protection Plus Report",
                "Revenue Report",
                "Margin Enhancement Report",
                "Top 30 Report",
                "Bottom 30 Report",
                "DOC Variable Scoring",
                "FP&A Dashboard"
            ],
            items: []
        };
        this.filterList = this.filterList.bind(this)
    }

    filterList(event){
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }

    componentWillMount(){
        this.setState({items: this.state.initialItems})
    }

    render(){
        return (
            <div className="section">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <label>Search Reports</label>
                            <input type="text" className="validate" onChange={this.filterList}/>
                        </div>
                    </div>
                </form>
                <ReportsList items={this.state.items}/>
            </div>
        );
    }
}