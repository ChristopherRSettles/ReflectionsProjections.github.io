import React, { Component } from 'react'
import { } from 'react-bootstrap'
import styles from './styles.scss'
import Navigation from './navigation/navigation'
import Content from './content/content'
import Footer from './footer/footer'


class MechMania extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="MechMania">
                <Navigation />
                <Content />
                <Footer />
            </div>
        )
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
}

export default MechMania
