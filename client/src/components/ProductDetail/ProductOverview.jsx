import React, { useState, useEffect, useId } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { OrbitSpinner } from 'react-epic-spinners';
import { FcCheckmark } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share';
import { TiTick } from 'react-icons/ti';

/* --------------------  styled components  --------------------*/

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Toast = styled.div`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  border-radius: 5px;
  padding: 20px;
  position: fixed;
`;

const ProdViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 40px 200px;
`

const ProdViewText = styled.div`
  width: 100%;
`

const ProdViewLine = styled.div`
  margin: 0 40px;
  background-color: #777;
  border-radius: 7px;
  height: 150px;
  width: 4px;
`

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  font-size: 24px;
  color: #94B49F;

  ${props =>
    props.button &&
    css`
      color: #94B49F;
      margin: 10px 25px;
    `};

`

const Feature = styled.div`
  display: inline-block;
  margin: 0 10px;
`



/* --------------------  ProductOverview  --------------------*/

function ProductOverview({ product, currentPhoto, currentStyle }) {
  const [loading, setLoading] = useState(true);
  const [shareQuote, setShareQuote] = useState();
  const [shareHashtag, setShareHashtag] = useState();
  const [shareUrl, setShareUrl] = useState();

  useEffect(() => {
    if (currentStyle) {
      setShareQuote(`Check this Awesome item! ${currentStyle.name}, $${currentStyle.default_price}`);
      setShareHashtag([`Awesome:${currentStyle.category}`, `Reviews:${currentStyle.totalReviews}`]);
      // set loading was moved to product useEffect
    }
  }, [currentStyle])

  useEffect(() => {
    setShareUrl(currentPhoto);
  }, [currentPhoto]);

  // add this useEffect
  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);


  return (
    <div>
      {!loading ?
        <ProdViewContainer>
          <ProdViewText>
            <h2>{product.slogan}</h2>
            <p>{product.description}</p>
            <Social>
              <FacebookShareButton className='social-btn' url={shareUrl} quote={shareQuote} hashtag={`#${shareHashtag}`}>
                <FaFacebook />
              </FacebookShareButton>
              <TwitterShareButton className='social-btn' url={shareUrl} title={shareQuote} hashtag={`${shareHashtag}`}>
                <FaTwitter />
              </TwitterShareButton>
              <PinterestShareButton className='social-btn' url={shareUrl} media={shareUrl} description={shareQuote} >
                <FaPinterest />
              </PinterestShareButton>
            </Social>
          </ProdViewText>
          <ProdViewLine></ProdViewLine>
          <div>
            {product.features.map(item => {
              let id = Math.random();
              return (
                <Feature key={id}>
                  {item.value ? <p><FcCheckmark className='check' />{item.feature}: {item.value}</p> : <p><FcCheckmark className='check' />{item.feature}</p>}
                </Feature>
              )
            })}
          </div>
        </ProdViewContainer>
        :
        <OrbitSpinner color="teal" />
      }
    </div>
  )
}


export default ProductOverview;