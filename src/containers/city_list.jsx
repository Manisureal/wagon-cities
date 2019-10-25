import React from 'react';
import City from '../containers/city';

class CityList extends React.Component {
    render() {
        return(
            <div className='cities'>
               {
                   this.props.cities.map((city) => <City city={city} /> )
               }
            </div>
        )
    }
}

export default CityList;