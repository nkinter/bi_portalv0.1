import React, {Component} from 'react';

export default class ReportsList extends Component {
    render(){
        return (
            <div className="collection">
                {
                    this.props.items.map(function(item) {
                        return <a href="#!" className="collection-item" data-category={item} key={item}>{item}</a>
                    })
                }
            </div>
        )
    }
}