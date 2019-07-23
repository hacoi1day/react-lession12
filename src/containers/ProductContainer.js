import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';

import * as actions from './../actions/index';

import PropTypes from 'prop-types';

class ProductContainer extends Component {

    showProduct(products) {
        let result = null;
        let { onAddToCart, onChangeMessage } = this.props;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                    onChangeMessage={onChangeMessage}
                    onAddToCart={(product) => onAddToCart(product)}
                    key={index} 
                    product={product} />
            });
        }
        return result;
    }

    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);