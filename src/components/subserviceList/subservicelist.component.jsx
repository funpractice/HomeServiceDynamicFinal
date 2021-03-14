import React, { Component } from 'react'
import SubserviceCard from '../subserviceCard/subserviceCard.component'

export default class SubserveiceList extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            sections: []
        }
    }


    componentDidMount() {
        // let servicename= this.state.sections.service_name;
        console.log(this.props.location.state);
        var val= this.props.location.state
        const apiUrl = 'http://localhost:4000/api/getCategoryByName/'+val;

        fetch(apiUrl)
          .then(response => response.json())
          .then(data => this.setState({ sections : data}));
      }
    render() {
        return (
            <div>
            <div className="container-fluid">
            <div className="row nthcard">
                {this.state.sections.map(({ subservice_id, ...otherSectionProps}) => (
                <div key={subservice_id}>
                <SubserviceCard  key={subservice_id} subserviceId={subservice_id} {...otherSectionProps}/>
                </div>))}
                </div>

                {/* // <SubserviceCard /> */}
            </div>
            </div>
        )
    }
}
