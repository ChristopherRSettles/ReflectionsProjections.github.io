import React, { Component } from 'react'
import styles from './styles.scss'

class Schedule extends Component {

    constructor() {
        super();
        this.state = {
            "scheduleType": "Corporate Events",
        }
        this.toggleSchedule = this.toggleSchedule.bind(this)
    }

    componentDidMount() {
        this.activeTab = document.body.querySelector(".active")
    }

    toggleSchedule (event) {
        // Remove the active class from the previous active tab
        this.activeTab.classList.remove("active")
        this.activeTab = event.currentTarget

        // Add the active class to the current active tab
        this.activeTab.classList.add("active")
        this.setState({
            "scheduleType": this.activeTab.innerHTML
        })
    }

    render() {
        if(this.state.scheduleType === "Corporate Events") {
            return (
                <div id="Schedule" className="Schedule">
                    <div className="header">
                        <h1>
                            Schedule
                        </h1>
                    </div>
                    <div className="content-container">
                        <div className="tab-container">
                            <div className="tab tab-1 active" onClick={this.toggleSchedule}>
                                Corporate Events
                            </div>
                            <div className="tab tab-2" onClick={this.toggleSchedule}>
                                Conference Events
                            </div>
                        </div>
                        <div className="content">
                            <div className="col">
                                <ul>
                                    <h3>Mon, Sep 17</h3>
                                    <li><small>12:00p - 1:00p</small>Tech Talk: Granular<span>2405</span></li>
                                    <li><small>6:00p - 7:00p</small>Tech Talk: Salesforce<span>2405</span></li>
                                    <li><small>7:00p - 8:00p</small>Corporate Social: TBD<span>2405</span></li>
                                </ul>
                                <ul>
                                    <h3>Tue, Sep 18</h3>
                                    <li><small>10:00a - 4:00p</small>Startup Fair<span>Atrium</span></li>
                                    <li><small>6:00p - 7:00p</small>Tech Talk: Uber<span>2405</span></li>
                                    <li><small>7:00p - 8:00p</small>Corporate Social: Flexport<span>2405</span></li>
                                </ul>
                                <ul>
                                    <h3>Wed, Sep 19</h3>
                                    <li><small>10:00a - 4:00p</small>Career Fair<span>Atrium</span></li>
                                    <li><small>6:00p - 7:00p</small>Tech Talk: Microsoft<span>2405</span></li>
                                    <li><small>7:00p - 8:00p</small>Corporate Social: TBD<span>2405</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(this.state.scheduleType === "Conference Events") {
            return (
                <div id="Schedule" className="Schedule">
                    <div className="header">
                        <h1>
                            Schedule
                        </h1>
                    </div>
                    <div className="content-container">
                        <div className="tab-container">
                            <div className="tab tab-1 active" onClick={this.toggleSchedule}>
                                Corporate Events
                            </div>
                            <div className="tab tab-2" onClick={this.toggleSchedule}>
                                Conference Events
                            </div>
                        </div>
                        <div className="content">
                            <div className="col">
                                <ul>
                                    <h3>Thu, Sep 20</h3>
                                    <li><small>4:00p - 5:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>5:00p - 7:00p</small>Experience: TBA<span>2405</span></li>
                                    <li><small>7:00p</small>Dinner<span>Atrium</span></li>
                                </ul>
                                <ul>
                                    <h3>Fri, Sep 21</h3>
                                    <li><small>11:00a</small>PuzzleBang Comes to UIUC!<span>TBA</span><br/><center>Sponsored by IMO</center></li>
                                    <li><small>1:00p - 2:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>2:00p - 4:00p</small>Experience: TBA<span>2405</span></li>
                                    <li><small>4:00p - 5:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>5:00p - 6:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>6:00p - 7:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>7:00p</small>Dinner<span>Atrium</span></li>
                                    <li><small>9:00p</small>MechMania Opening Ceremony<span>1404</span><br/><center>Sponsored by DeepScale</center></li>
                                    <li><small>9:00p</small>Speaker Socials<span>TBD</span></li>
                                    <li><small>11:00p</small>Late Night Snack<span>Atrium</span></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <h3>Sat, Sep 22</h3>
                                    <li><small>8:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>10:00a - 11:00a</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>11:00a - 12:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>12:00p</small>Lunch<span>Atrium</span></li>
                                    <li><small>1:00p - 3:00p</small>Experience: TBA<span>2405</span></li>
                                    <li><small>3:00p - 4:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>4:00p - 5:00p</small>Speaker: TBA<span>2405</span></li>
                                    <li><small>5:00p - 7:00p</small>ACM Symposium<span>2405</span></li>
                                    <li><small>7:00p</small>Dinner<span>Atrium</span></li>
                                    <li><small>8:00p</small>PuzzleBang Closing Ceremony<span>2405</span></li>
                                    <li><small>9:00p</small>MechMania Closing Ceremony<span>1404</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Schedule
