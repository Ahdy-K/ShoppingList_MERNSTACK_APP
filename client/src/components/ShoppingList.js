import React, { Component } from 'react'
import {Container, ListGroupItem, ListGroup, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './ShoppingList.css'
import {connect} from 'react-redux'
import {getItems, deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types'


class ShoppingList extends Component {
    onDelete = id => {
        this.props.deleteItem(id)
    }
    componentDidMount(){
        this.props.getItems()
    }
  render() {
      const {items} = this.props.item
    return (
      <div>
        <Container>
          
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({_id, name})=>(
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                className="remove-btn" color="danger"
                                size="sm" onClick={this.onDelete.bind(this, _id)}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
      </div>
    )
  }
}
ShoppingList.propTypes={
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps= (state)=>({
    item: state.item
})
export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList)
