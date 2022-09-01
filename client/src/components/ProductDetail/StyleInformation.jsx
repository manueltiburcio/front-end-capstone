import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Parse from '../../parse';
import { OrbitSpinner } from 'react-epic-spinners';
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';

/* --------------------  styled components  --------------------*/

const InfoContainer = styled.div`
margin: 0 30px;
width: 250px;
scroll-behavior: smooth;
`
const StyleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

const AddContainer = styled.div`
margin: 30px 0;
`

const StyleTitle = styled.div`
display: inline-flex;
`

const StyleEntry = styled.img`
cursor: pointer;
border-radius: 30px;
border: solid 0.5px #333;
object-fit: cover;
height: 50px;
width: 50px;
margin: 5px;
background-color: #94B49F;
`

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
padding: 10px 10px;
margin: 5px 7px;

${props =>
    props.primary &&
    css`
    background: palevioletred;
    color: white;
  `};
`
const Reviews = styled.a`
margin-left: 10px;
`

/* --------------------  styled components  --------------------*/

function ProductInformation({
  product,
  currentStyle,
  renderStars,
  handleStyleClick,
  handleLocalClick,
  localName,
  localId,
  handleLocalSave,
}) {
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState();
  const [sizeSelected, setSizeSelected] = useState(false);
  const [skusId, setSkusId] = useState();




  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product])

  let renderAvgStars = () => {
    return renderStars(product.averageRating).map((star => star))
  };


  let findDuplicates = [];

  const handleSize = (e) => {
    let keys = [];
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    const option = el.getAttribute('id');

    for (let key in currentStyle.skus) {
      keys.push(key);
    }

    for (let i = 0; i < keys.length; i++) {
      if (currentStyle.skus[keys[i]].size === option) {
        setSkusId(parseInt(keys[i]));
      }
    }
    setQty(parseInt(e.target.value));
  }

  const renderQty = (qty) => {
    let result = [];

    if (qty > 15) {
      for (let i = 2; i <= 15; i++) {
        let idR = Math.random();
        result.push(<option value={qty} key={idR}>{i}</option>);
      }
    } else {
      for (let i = 2; i <= qty; i++) {
        let idR = Math.random();
        result.push(<option value={qty} key={idR}>{i}</option>);
      }
    }
    return result;
  }

  const handleQty = (e) => {
    console.log('rdy to post??');
    setSizeSelected(true);
  }


  // pending to use api to add to card
  async function addToCart(skusId) {
    let params = { sku_id: skusId };
    const request = await Parse.create('cart', undefined, params);
    console.log(request.data);
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (sizeSelected) {
      addToCart(skusId);
    }
  }


  const relatedLink = (e) => {
    e.preventDefault();
    window.location.replace("/#related");
  }

  return (
    <div>
      {!loading ?
        <InfoContainer>
          <div>
            {renderAvgStars()}
            <Reviews href='' onClick={relatedLink}>Read all {product.totalReviews} reviews</Reviews>
          </div>

          <h4>{product.category}</h4>
          <h2>{product.name}</h2>
          {currentStyle.sale_price !== null ?
            <div>
              <h2 style={{ textDecoration: 'line-through', fontSize: '14px' }}>${currentStyle.original_price}</h2>
              <h2 style={{ color: '#FF0000' }}>${currentStyle.sale_price}</h2>
            </div>

            : <h2>${product.default_price}</h2>}

          <div>
            <StyleTitle>
              <h4> STYLE > </h4>
              <h4>{currentStyle.name}</h4>
            </StyleTitle>
            <StyleContainer>

              {
                product.styles.map(item => {
                  let id = Math.random();
                  if (findDuplicates.includes(item.photos[0].thumbnail_url)) {
                    return;
                  } else {
                    findDuplicates.push(item.photos[0].thumbnail_url);
                    return (
                      <StyleEntry key={id}
                        id={item.style_id}
                        name={item.name}
                        onClick={(e, url, prod) => {
                          handleLocalClick(e);
                          handleStyleClick(e, item.url, item);
                        }}
                        src={item.photos[0].thumbnail_url} ></StyleEntry>
                    )
                  }

                })}

            </StyleContainer>
          </div>

          <AddContainer>

            <select value={qty} onChange={handleSize}>
              <option value="0">Select Size</option>
              {currentStyle &&
                Object.values(currentStyle.skus).map((item => {
                  let idR = Math.random();
                  return <option id={item.size} value={item.quantity} key={idR}>{item.size}</option>
                }))}
            </select>

            <select onChange={handleQty}>
              {qty ? <option value="1">1</option> : <option value="-">-</option>}
              {qty &&
                [...Array(qty)].map((e, i) => <option value={e} key={i}>{i}</option>)
              }
            </select>

            <Button primary onClick={(e) => { handleLocalSave(e); handleAddToCart(e); }}>ADD TO CART</Button>
            <Button onClick={handleLocalSave}><TiStarFullOutline /></Button>
          </AddContainer>

        </InfoContainer>
        :
        <OrbitSpinner color="teal" />
      }
    </div>



  )

}

export default ProductInformation;