const ProductCard = ({productInfo}) => {

    const {title, thumbnail} = productInfo
    return (
      <div className='product-card'>
        <img src={thumbnail} alt={title} className='product-img'/>
        <span>{title}</span>
      </div>
    )
  }

export default ProductCard