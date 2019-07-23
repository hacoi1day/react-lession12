import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Message from './../constants/Message';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';

class CartContainer extends Component {

    showCartItem = (cart) => {
        let result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item={item}
                        index={index}
                        onDeleteProductInCart={(product) => this.props.onDeleteProductInCart(product)}
                        onChangeMessage={(message) => this.props.onChangeMessage(message)}
                        onUpdateProductInCart={(product, quantity) => this.props.onUpdateProductInCart(product, quantity)}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }

    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    mapDispatchToProps: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.actUpdateProductInCart(product, quantity));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);