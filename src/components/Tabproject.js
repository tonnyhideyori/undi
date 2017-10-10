import React, { Component } from 'react';
import Mwalimu from './Mwalimu';
import Millenium from './Millenium';
import Info from './Info';
import Derm from './Derm';
import Airport from './Airport';
import Arusha from './Arusha';
import Udom from './Udom';
import Rita from './Rita';
import Kahama from './Kahama'
import Police from './Police';
class Tabproject extends Component{
  state = {
    tabs: [
      { text: 'Millenium Tower', data: <Millenium/> },
      { text: 'Rita Tower', data: <Rita/> },
      { text: 'College of Education for UDOM', data: <Udom/> },
      { text: 'Mwalimu House', data: <Mwalimu/> },
      { text: 'Derm Complex', data: <Derm/> },
      { text: 'Police Baracks Staff Quarters', data: <Police/> },
      { text: 'Airport Hanger for Precision', data: <Airport/> },
      { text: 'NSSF Commercial Complex', data: <Arusha/> },
      { text: 'College of Informatics and Virtual Sciene for UDOM', data: <Info/> },
      { text: 'NSSF Kahama', data: <Kahama/> }
    ],
    activeTab: 0,
    loaded: true
  };

  setActive = (tab) => {
    const shouldActivate = this.state.tabs.findIndex(tabToFind => tabToFind.text === tab.text);
    this.setState({ activeTab: shouldActivate, loaded: false }, () => {
      setTimeout(() => this.setState({ loaded: true}), 250)
    })
  };

  render() {
    const { activeTab, loaded } = this.state;
    return (
      <div>
        <div id="vertical" className="tab">
          {this.state.tabs.map((tab, index) => {
            return (
              <button
                key={index}
                className={`tablinks ${activeTab === index ? 'active' : ''}`}
                onClick={() => this.setActive(tab)}
              >
                {tab.text}
              </button>
            )
          })}
        </div>

        <div className={`tabcontent ${loaded ? 'loaded' : ''}`}>
          {loaded && this.state.tabs[activeTab].data}
        </div>

      </div>
    );
  }
}
export default Tabproject;
