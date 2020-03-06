import React from 'react';

function FeatureList(){
    render() {
      const {selected} = this.props;
      const features = Object.keys(this.props.features)
        .map(key => {
            return (
                <Feature 
                  name={key} 
                  key={key} 
                  options={this.props.features[key]} 
                  selected={selected}
                  onSelect={this.props.onSelect}
                />
            )
        })
  
      return (
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          {features}
        </section>
      )
    }
  }

export default FeatureList;