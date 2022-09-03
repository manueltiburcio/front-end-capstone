import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "black",
  mainBColor: 'white',
  headerBColor: 'white',
  borderColor: '1px solid black',
  starColor: 'teal',
  productBgColor: 'rgba(28,28,30, .9)',
  productBorderColor: '1px solid black',
  productImgBorder: '',
  productDescBorder: '1px solid burlywood',
  burlyBorderBlack: '',
  starCardColor: '',
  defaultPrice: 'white',
  qandaSearchBg: 'white',
  qandaBorderLeft: '1px solid black',
  qandaBorderTop: '1px solid black',
  qandaBorderBottom: '1px solid black',
  qandaIconBorderLeft: '1px solid black',
  qandaIconBorderTop: '1px solid black',
  qandaIconBorderBottom: '1px solid black',
  qandaPlaceholder: 'gray',
  showMoreBg: 'teal',
  showMoreColor: 'white',
  helpfulColor: 'teal',
  addAnswercolor: 'teal',
  reportColor: 'teal',
  plusCardAreaBg: '#cccccc',
  plusCardAreaColor: 'teal',
  burlyAndTeal: 'teal',
  gContainerImg: '',
};

export const darkTheme = {
  body: "#121212",
  fontColor: "white",
  mainBColor: '#2c2c2f',
  headerBColor: '#1c1c1e',
  borderColor: '1px solid white',
  starColor: '#00ADB5',
  productBgColor: 'black',
  productBorderColor: '1px solid gray',
  productImgBorder: 'border-bottom: 1px solid gray',
  productDescBorder: '',
  burlyBorderBlack: '1px solid burlywood',
  starCardColor: 'teal',
  defaultPrice: 'black',
  qandaSearchBg: '#48484a',
  qandaBorderLeft: '',
  qandaBorderTop: '',
  qandaBorderBottom: '',
  qandaIconBorderLeft: '',
  qandaIconBorderTop: '',
  qandaIconBorderBottom: '',
  qandaPlaceholder: 'white',
  showMoreBg: 'burlywood',
  showMoreColor: 'black',
  helpfulColor: 'burlywood',
  addAnswercolor: 'burlywood',
  reportColor: 'burlywood',
  plusCardAreaBg: '#1c1c1e',
  plusCardAreaColor: 'white',
  burlyAndTeal: 'burlywood',
  gContainerImg: '1px solid burlywood',
};

export const GlobalStyles = createGlobalStyle`

/*
  MAIN DARK
*/

body {
  width: 1420px;
  font-family: 'Noto Sans', sans-serif;
  font-size: small;
  margin: auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
}

.main {
  width: 1440px;
  /* border: 1px dotted blue; */
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.mainBColor};
  color: ${(props) => props.theme.fontColor};
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 100px;
  width: 1420px;
  background-color: ${(props) => props.theme.headerBColor};
  color: ${(props) => props.theme.fontColor};
  border-bottom: 1px solid burlywood;;
}

a:visited {
  color: ${(props) => props.theme.fontColor};
}

.spinner {
  margin-left: 50%;
  margin-top: 25%;
  height: 250px;
  width: 250px;
}

::placeholder {
  color: gray;
}

.logoheader {
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}

.toprightHeader {
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
}

.logo {
  margin-top: 10px;
  font-size: 60px;
  color: teal;
}

.logotext {
  font-size: 25px;
  color: ${(props) => props.theme.fontColor};
}

.search {
  width: 500px;
  margin-top: 5px;
  height: 30px;
  border-style: none;
  padding-top: 5px;
  outline:none;
  color: ${(props) => props.theme.headerBColor};
  color: ${(props) => props.theme.fontColor};
}

.searchbar {
  border-bottom: ${(props) => props.theme.borderColor};
  padding: 1px;
}

.searchIcon {
  font-size: 20px;
}

.shoppingBag {
  margin-top: 15px;
  font-size: 25px;
  padding: 5px;
}

.star {
  color: ${(props) => props.theme.starColor};
  font-size: 16px;
}

/*
  Related Items
*/

.relatedSection, .outfitsSection {
  height: 500px;
  margin: auto;
  width: 1340px;
  background-color: ${(props) => props.theme.mainBColor};
  padding-left: 70px;
}

.related {
  height: 450px;
  width: 1200px;
  display: grid;
  position: relative;
  overflow: hidden;
  grid: auto / auto-flow max-content;
  z-index: 1;
  padding-left: 20px;
}

.sectionTitle {
  font-weight: lighter;
  padding-left: 30px;
  color: ${(props) => props.theme.fontColor};
}

/*
  Product Cards
*/

.productCard {
  border: ${(props) => props.theme.productBorderColor};;
  width: 255px;
  height: 400px;
  margin-left: 10px;
  margin-right: 10px;
  transition: opacity 0.5s;
  opacity: 1;
  background-color: ${(props) => props.theme.productBgColor};
}

.productCardImg {
  width: 255px;
  height: 300px;
  position: relative;
  border-bottom: ${(props) => props.theme.productImgBorder};
}

.productCardImg :hover {
  cursor: pointer;
  opacity: .90;
}

.productImages {
  width: 255px;
  height: 300px;
}

.productCardDesc {
  padding-left: 10px;
  padding-top: 10px;
  width: 255px;
  height: 50px;
  color: white;
  border-top: ${(props) => props.theme.productDescBorder};
}

.productCardRating {
  margin-top: 5px;
  padding-left: 10px;
  padding-top: 10px;
  width: 255px;
}

.starCard, .actionCard {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 25px;
  color: ${(props) => props.theme.starCardColor};
}

.starCard :hover {
  opacity: 100%;
}

.cardCat, .cardName, .cardPrice {
  padding: 1px;
}

.cardPrice {
  font-size: small;
  font-weight: lighter;
  display: flex;
  justify-content: flex-start;
  width: 255px;
}

.salePrice {
  color: red;
}

.defaultPrice {
  text-decoration: line-through;
  color: ${(props) => props.theme.defaultPrice};
}

.cardLoader {
  width: 255px;
  height: 400px;
  position: relative;
}

.cardSpinner {
  position: absolute;
  top: 40%;
  left: 45%;
}

/*
  Q AND A
*/

.questionsSection {
  width: 100px;
  height: auto;
  margin-left: 50px;
}

.qanda {
  display: flex;
  flex-direction: column;
  width: 1300px;
  height: auto;
  /* border: 2px solid black; */
  border-bottom: 1px dashed white;
  overflow-y: auto;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.qanda::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.qanda-heading {
  display: flex;
  height: 20px
}

.qanda-search {
  display: inline-flex;
  border: 1px solid white;
  width: 1298px;
  height: 50px;
  margin-top: 5px;
}

.qanda-search-input {
  display: inline-flex;
  border: none;
  outline: none;
  width: 1300px;
  height: 50px;
  background-color: ${(props) => props.theme.qandaSearchBg};
  align-items: center;
  caret-color: white;
  padding-left: 10px;
  color: white;
  font-size: 16px;
  border-left: ${(props) => props.theme.qandaBorderLeft};
  border-top: ${(props) => props.theme.qandaBorderTop};
  border-bottom: ${(props) => props.theme.qandaBorderBottom};
}

.qanda-search-icon {
  display: inline-flex;
  border: none;
  background-color: #48484a;
  color: white;
  font-size: 30px;
  align-items: center;
  border-left: ${(props) => props.theme.qandaIconBorderLeft};
  border-top: ${(props) => props.theme.qandaIconBorderTop};
  border-bottom: ${(props) => props.theme.qandaBorderBottom};
}

.qanda-search-input::placeholder {
  display: flex;
  font-size: 16px;
  color: ${(props) => props.theme.qandaPlaceholder};
  align-items: center;
}

.question-list {
  display: flex;
  flex-direction: column;
  width: 1300px;
  overflow-y: auto;
}

.question-list::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.question-body {
  display: flex;
  width: 1400px;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
}

.question-set {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 5px 5px;
}

.question-line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 5px;
  font-size: 16px;
}

.answer-list {
  display: flex;
  flex-direction: column;
}

.answer-line {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
}

.no-answer {
  justify-content: center;
  margin: 5px
}

/*
  BUTTONS
*/
.show-more-or-less {
  margin-top: 10px;
  height: 30px;
  width: 180px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.showMoreBg};
  color: ${(props) => props.theme.showMoreColor};
  border-style: none;
}

.helpful {
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: ${(props) => props.theme.helpfulColor};
}

.helpful:hover, .add-answer:hover, .report:hover{
  cursor: pointer;
}

.add-answer {
  background-color: transparent;
  border:none;
  color: ${(props) => props.theme.addAnswercolor};
}

.report {
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.reportColor};
}


/*
  Outfits
*/

.plusCardArea {
  background-color: ${(props) => props.theme.plusCardAreaBg};
  color: ${(props) => props.theme.plusCardAreaColor};
  height: 300px;
  width: 255px;
  position: relative;
  border-bottom: 1px solid gray;
}

.plusCardArea:hover {
  background-color: ${(props) => props.theme.burlyAndTeal};
  color: black;
  height: 300px;
  width: 255px;
  cursor: pointer;
  /* position: relative; */
}

.plusSymbol {
  position: absolute;
  top: 42%;
  left: 42%;
  font-size: 50px;
}


.plusSymbolText {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-top: ${(props) => props.theme.productDescBorder};
}

.outfits {
  height: 445px;
  width: 1200px;
  display: grid;
  position: relative;
  overflow: hidden;
  grid: auto / auto-flow max-content;
  z-index: 1;
  padding-left: 20px;
}

/*
  MODAL
*/

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, .15);
  z-index: 2;
}

.modal-main {
  position:fixed;
  background: #1c1c1e;
  color: white;
  width: 770px;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 1px solid black;
}

.modalTable {
  width: 750px;
  height: 300px;
  padding: 10px;
  padding-bottom: 30px;
}

.modalData {
  width: 250px;
  height: 10px;
  text-align: center;
  padding: 3px;
}

.tableHead {
  width: 750px;
  text-align: center;
}

.display-block {
  display: block;
}

.display-none {
  display: none;
}

/*
  CAROUSEL
*/

.carousel {
  overflow: hidden;
  position: relative;
}

.rightArrow {
  position: absolute;
  top:170px;
  left:1125px;
  font-size: 30px;
  z-index: 14;
}

.rightArrow:hover, .leftArrow:hover {
  cursor: pointer;
}

.leftArrow {
  position: absolute;
  top: 170px;
  left: 0px;
  font-size: 30px;
  z-index: 14;
}

/*
  STARS
*/

.single-star-outline {
  height: 36px;
  width: 31px;
}

.single-star-fill {
  position: relative;
  display: inline-block;
  height: 36px;
  background-color: #333333;
}

.single-star-container {
  height: 36px;
  width: 31px;
  display: inline-block;
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth
}

/* ----------------- Image Gallery ----------------- */

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.mainBColor};
  margin-top: 50px;
}

.overviewFeature {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.pv-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in 0.5s ease;
  margin: 10px;
}

.pv-container-active {
  display: flex;
  align-items: center;
  justify-content: end;
  transition: ease-out 0.5s ease;
}

.pv-img {
  cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  width: 500px;
  height: 500px;
  object-fit: cover;
  border: ${(props) => props.theme.burlyBorderBlack};
}

.pv-active {
  cursor: -moz-zoom-out;
  cursor: -webkit-zoom-out;
  align-self: flex-end;
  width: 700px;
  height: 500px;
  cursor: zoom-out;
  object-fit: contain;
}

.g-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.g-container img {
  border: ${(props) => props.theme.gContainerImg};
}

.g-entry {
  cursor: pointer;
  background-color: #fff;
  width: 50px;
  margin: 20px;
  height: 50px;
  transition: all .5s ease;
}

.g-border {
  border-bottom: solid 5px burlywood;
}

.arrow {
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  font-size: 25px;
  padding: 5px;
}

.expand {
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  font-size: 30px;
  align-self: flex-start;
}

/* ----------------- Style Section ----------------- */

.info-container {
  margin: 0 30px;
  width: 250px;
  scroll-behavior: smooth;
}

.star {
  margin: 0 2px;
}

.reviews {
  margin-left: 10px;
}

.style-title {
  display: inline-flex;
}

.style-entry {
  cursor: pointer;
  border-radius: 30px;
  border: solid 0.5px #333;
  object-fit: cover;
  height: 50px;
  width: 50px;
  margin: 5px;
  background-color: ${(props) => props.theme.burlyAndTeal};
}

.style-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.style-container img {
  border: ${(props) => props.theme.burlyBorderBlack};
}

.add-container {
  margin: 30px 0;
}

.add-container > button {
  padding: 10px 10px;
  margin: 5px 7px;
  background-color: ${(props) => props.theme.burlyAndTeal};
  color: black;
  border-style: none;
  border-radius: 6px;
  padding: 10px;
}

.add-container :hover {
  cursor: pointer;
}


/* ----------------- Product Overview ----------------- */
.prodview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 40px 400px;
}

.prodview-text {
  width: 100%;
}

.prodview-line {
  margin: 0 40px;
  background-color: burlywood;
  border-radius: 7px;
  height: 150px;
  width: 4px;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme.burlyAndTeal};
}

.social > button {
  color: #94B49F;
  margin: 10px 25px;
}

/*******************
  MAIN DIVS
********************/

.reviewMain {
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  width: 1400px;
  height: auto;
  padding: 50px;
  /* background-color: pink; */
  /* border: 2px solid black; */
  /* overflow-y: auto; */
}

.reviewSideBar {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 400px;
  margin-right: 30px;
  padding: 20px 10px;
  border-right: 1px solid white;
  /* background-color: gray; */
  /* border: 2px solid rgb(8, 88, 8); */
}

.reviewList {
  height: auto;
  width: 900px;
  /* border: 2px solid black; */
  overflow-y: auto;
}

.reviewList::-webkit-scrollbar {
  width: 0;
  height: 0;
  /* background: transparent; */
}

/*******************
  SIDE BAR
********************/

/*
  AVERAGE RATING
*/

.averageRating {
  display: flex;
  /* border: 1px solid gray; */
}

/*
  RECOMMENDATIONS
*/

/*
  RATING BREAKDOWNS
*/

.ratingBreakdown {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  /* border: 1px solid gray; */
}

.reviewBarSectionOff,
.reviewBarSectionOn {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: inherit;
  align-items: center;
  /* border: 1px solid rgb(65, 65, 65); */
}

.reviewBarSectionOn {
  background-color: rgba(012, 012, 012, 0.274);
  /* border: 5px solid teal; */
}

.reviewBarSectionOff:hover {
  cursor: pointer;
  /* background-color: teal; */
  /* transition: 0.3s; */
}

.reviewBarSectionOn:hover {
  cursor: pointer;
  /* background-color: transparent; */
  /* transition: 0.3s; */
}

.reviewBarLabel {
  width: 50px;
  padding:5px;
  text-align: center;
}

.reviewBar {
  height: 10px;
  width: 300px;
  margin-top: 5px;
  margin-right: 5px;
  /* background-color: pink; */
  /* border: 2px solid red; */
}

/*
  CHARACTERISTICS
*/

.reviewCharacteristicSection {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 400px;
  /* border: 2px solid black; */
}

.reviewCharacteristicLabel {
  height: 10px;
  width: 50px;
  margin-right: 10px;
}

.reviewCharacteristicBarSection {
  display: flex;
  flex-direction: row;
}

.reviewCharacteristicBar {
  height: 10px;
  /* width: 300px; */
  background-color: gray;
  margin-top: 18px;
  margin-right: 2px;
}

.reviewCharacteristicBarLabels {
  display: flex;
  flex-direction: row;
  width: 300px;
  margin-left: 60px;
  justify-content: space-between;
  /* text-align: center; */
  height: 30px;
  /* font-size: 30px; */
}




/**********************
  REVIEW LIST
***********************/

.reviewListHeader {
  display: flex;
  flex-direction: row;
  width: 900px;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
}

.reviewListHeader h3 {
  font-size: 14px;
}

.reviewTile {
  /* background-color: red; */
  /* height: 200px; */
  border-bottom: 2px solid burlywood;
  padding: 4px 10px;
}

.reviewUserInfo {
  display: flex;
  flex-direction: row;
}

.reviewBodySection {
  overflow-wrap: break-word;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.reviewPhotoThumbnailSection {
  /* height: 150px; */
  /* background-color: pink; */
}

.reviewPhotoThumbnailSection img:hover{
  cursor: pointer;
}

.reviewPhotoThumbnail {
  height: 100px;
  margin-right: 10px;
}

.reviewResponse {
  background-color: rgba(180, 179, 179, 0.938);
  width: 80%;
}

.reviewInteractions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
}

.reviewHelpful {
  display: flex;
  flex-direction: row;
}

.reviewHelpful p {
  margin-right: 5px;
}

.reviewHelpful p u:hover {
  cursor: pointer;
}

.reviewReport u:hover {
  cursor: pointer;
}

.reviewExpandButtonSection {
  margin-top: 20px;
}

.reviewExpandButton {
  height: 60px;
  margin-right: 10px;
}

/**********************
  PHOTO OVERLAY
***********************/

.reviewPhotoExpand {
  position: fixed;
  max-height: 90vh;
  max-width: 90vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: white;
  border: 2px solid teal;
  z-index: 1;
  overflow-y: auto;
}

.reviewPhotoExit {
  position: absolute;
  left: 10px;
  top: 10px;
}

/**********************
  INPUT OVERLAY
***********************/

.reviewOverlay {

  /* height: 100vh;
  width: 100vh; */
}

.reviewOverlayBackground {
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 30%;
  height: 100vh;
  width: 100vw;
}

/**********************
  REVIEW INPUT
***********************/

.reviewInput {
  position: fixed;
  --height: 900px;
  --width: 1000px;
  top: calc(50% - (var(--height) / 2));
  left: calc(50% - (var(--width) / 2));
  margin: auto;
  height: var(--height);
  width: var(--width);
  padding: 6px 18px;
  background-color: #1c1c1e;
  border: 2px solid burlywood;
  z-index: 1;
  overflow-y:scroll;
}

.reviewInput h2 {
  margin-top: 6px;
  margin-bottom: 4px;
}

.reviewInput h3 {
  margin-top: 20px;
  margin-bottom: 6px;
}

.reviewInput>h4 {
  margin-top: 0;
  margin-left: 15px;
}

.reviewInput p {
  margin-top: 0;
}

.reviewInput span {
  margin-left: 3px;
}

.reviewInputExit {
  position: absolute;
  left: 96%;
  top: 10px;
}

.reviewInput textarea {
  width: calc(var(--width) - 105px);
  height: 135px;
  resize: none;
}

/* .reviewInput textarea:first-of-type {
  width: 545px;
  height: 15px;
} */

.reviewTextInput {
  width: 550px;
}

.reviewInputExit:hover {
  cursor: pointer;
  color: red;
}

.reviewSubmit {
  height: 60px;
  width: 150px;
  margin-top: 40px;
}

.reviewSubmitEnable {
  cursor: pointer;
}

/*
  STAR INPUT
*/

.reviewInputStarSection {
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 1px 5px;
}

.reviewInputStarSection p {
  margin: 0;
  margin-left: 10px;
}

.ratingInputStar {
  margin-right: 7px;
  cursor: pointer;
}

.ratingInputStar:first-child {
  margin-left: 2px;
}

/*
  RECOMMENDATION INPUT
*/

.reviewInputRecommendations {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  padding: 1px 5px;
  /* background-color: red; */
}

/* .reviewInputRecommendations h3 {
  width: 100%;
  margin: 0;
} */

.reviewInputRecommendations input {
  margin-right: 6px;
  cursor: pointer;
}

.reviewInputRecommendations p {
  margin: 0;
  /* margin-top: 14px; */
  margin-right: 40px;
}

/*
  CHARACTERISTIC INPUT
*/

.reviewInputCharacteristicsAggregate {
  /* border: 1px solid black;
  border-left: 0;
  border-right: 0; */
  padding: 1px 5px;
  width: 550px;
}

.reviewInputCharacteristicSection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  margin-top: 5px;
  /* padding-left: 5px; */
  border-bottom: 1px solid white;
  /* border: 1px solid red; */
}

.reviewInputCharacteristicSection:first-child {
  margin-top: 0;
}

.reviewInputCharacteristicSection:last-child {
  /* border-bottom: 0; */
  /* border: 1px solid red; */
}

.reviewInputCharacteristicLabel {
  margin: 0;
  margin-bottom: 3px;
  /* width: 100%; */
  /* background-color: red; */
}

.reviewInputCharacteristicButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid blue; */
}

.reviewInputCharacteristicButtons input {
  cursor: pointer;
}

.reviewInputCharacteristicsDescriptors {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  /* border: 2px solid green; */
}

.reviewInputCharacteristicsDescriptors p {
  margin: 5px 0;
}

/*
  IMAGES INPUT
*/

.reviewInputPhotoSection {
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: row;
  height: 110px;
  /* max-height: 120px; */
  width: calc(var(--width) - 100px);
  /* padding: 5px; */
  /* background-color: red; */
  border: 1px solid black;
  background-color: white;
}

.reviewInputPhotoThumbnail {
  height: 100px;
  margin: 5px;
  margin-right: 10px;
  /* width: 80px; */
}

.reviewInputPhotoButton {
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  /* grid-template-rows: 50% 30px; */
  /* grid-template-columns: 50%; */
  background-color: #cccccc;
  height: 110px;
  width: 80px;
  justify-content: center;
  align-items: center;
  color: black;
  /* align-content: center; */
}

.reviewInputPhotoButton:hover {
  background-color: burlywood;
  cursor: pointer;
}

.reviewInputPhotoButtonPlus {
  /* display: flex;
  justify-content: center;
  align-content: center; */
  /* grid-row: 2; */
  /* grid-column: 2; */
  font-size: 40px;
  margin: auto;
}

.reviewInputPhotoButtonText {
  /* display: flex;
  justify-content: center;
  align-content: center; */
  /* grid-row: 3; */
}

button:hover {
  cursor: pointer;
}

.reviewExpandButton {
  border-radius: 5px;
  height: 30px;
  background-color: ${(props) => props.theme.burlyAndTeal};
  border-style: none;
}


`;