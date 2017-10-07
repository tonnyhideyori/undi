import React, { Component } from 'react';
import Intro from './Intro';
import Stra from './Stra';
import Respons from './Respons';
import Directors from './Directors';
class Tabs extends Component {

  state = {
    tabs: [
      { text: 'Introduction of the company', data: <Intro/> },
      { text: 'Directors', data: <Directors/> },
      { text: 'Corparate Strategy', data: <Stra/> },
      { text: 'Corparate Responsibilities', data: <Respons/> }
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
        <div className="tab">
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

export default Tabs;
