import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link as ReactRouterLink } from "react-router-dom"
import styled from "styled-components"

import { actions as navigationActions } from "../../redux/Navigation"

/* This Component wraps react-router-dom <Link /> and wires up route changes to redux */

class Link extends React.Component {
    render() {
        const { href, to } = this.props

        return (
            <ReactRouterLink 
                { ...this.props }
                onClick={ this._onClick }
            >
                { this.props.children }
            </ReactRouterLink>
        )
    }

    _onClick = (e) => {
        const { to } = this.props
        console.log("NAVIGATING TO:", to)

        this.props.navigateto(to)
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...navigationActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
