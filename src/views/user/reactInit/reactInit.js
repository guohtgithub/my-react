import React from 'react'

class SearchBar extends React.Component{
    render(){
        return (
            <form>
                <input type='text' placeholder="Search..." />
                <p>
                    <input type='checkbox' />
                    {' '}
                    only show products in stock
                </p>
            </form>
        )
    }
}

class ProductRow extends React.Component{
    render(){
        const product = this.props.product
        const name = product.stocked ? 
            product.name : 
            <span style={{color:'red'}}>
                {product.name}
            </span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductCategoryRow extends React.Component{
    render(){
        const category = this.props.category
        return (
            <tr>
                <th colSpan='2'>
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductTable extends React.Component{
    render(){
        const rows = []
        let lastCategory = null

        this.props.products.forEach(prod => {
            if(prod.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow category={prod.category} key={prod.category} />
                )
            }

            rows.push(
                <ProductRow product={prod} key={prod.name} />
            )

            lastCategory = prod.category

        })
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class ReactComment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[
                {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
                {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
                {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
                {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
                {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
                {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'} 
            ]
        }
    }
    render(){
        return (
            <div>
                product list
                <SearchBar />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default ReactComment