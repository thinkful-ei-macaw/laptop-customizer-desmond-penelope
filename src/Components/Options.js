import React from 'react';

function Options() {
    render() {
      return (
        <li className="feature__item">
          <div 
            className={this.props.featureClass}
            onClick={e => this.props.onSelect(this.props.featureName, this.props.item)}>
              { this.props.item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.item.cost) })
          </div>
        </li>
      )
    }
  }

  export default Options;