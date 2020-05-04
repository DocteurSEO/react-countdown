import React, { Component } from 'react'
import { store } from 'react-notifications-component';

export class Clock extends Component {
    state = {
        jours: 0,
        heures: 0,
        minutes: 0,
        secondes: 0,
        err: true

    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline)

    }
    componentDidMount() {

        setInterval(() => {
            this.getTimeUntil(this.props.deadline)
        }, 1000);
    }

    getTimeUntil(deadline) {

        if (deadline.split(' ')[2] == '') { deadline = deadline + '2020'; console.log(deadline) }

        const time = Date.parse(new Date(deadline)) - Date.parse(new Date())

        const secondes = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const heures = Math.floor(time / (1000 * 60 * 60) % 24);
        const jours = Math.floor(time / (1000 * 60 * 60 * 24));

        if (!isNaN(jours) && Math.sign(jours) != '-1') {
            this.setState({ ...this.state, err: true })

            this.setState({
                jours,
                heures,
                minutes,
                secondes

            })

        }
        else {
            if (this.state.err) {
                store.addNotification({
                    title: "Oups!",
                    message: " Merci d'indiquer une date valide comme 12 mai 2021",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
            }
            this.setState({ ...this.state, err: false })

        }


    }





    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log('nextProps', nextProps)
    //     console.log('nextState', nextState)
    //     return nextProps != nextState ? true : false
    // }


    render() {


        return (
            <ul>
                <li><span id="days">{this.state.jours}</span>jours</li>
                <li><span id="hours">{this.state.heures}</span>heures</li>
                <li><span id="minutes">{this.state.minutes}</span>Minutes</li>
                <li><span id="seconds">{this.state.secondes}</span>Secondes</li>
            </ul>
        )
    }


}

export default React.memo(Clock)
