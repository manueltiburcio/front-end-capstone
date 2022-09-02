import React, { useState, useEffect, useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import Parse from '../../parse.js';
import axios from 'axios';
import QandASearch from './QandASearch.jsx';
import RelevantQ from './RelevantQ.jsx'
//import './QandA.css';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      filtered: [],
      count: 2,
      showMore: false
    };
    this.searchQuestion = this.searchQuestion.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  searchQuestion(query) {
    if (query === '' || query === 'undefined') {
      this.setState({
        filtered: this.state.questions
      })
    }

    let queriedQuestions = this.state.questions.filter(
      question =>
        question.question_body.toLowerCase().includes(query.toLowerCase()));

    if (queriedQuestions.length === 0) {
      this.setState({
        filtered: this.state.questions
      })
    } else {
      this.setState({
        filtered: queriedQuestions
      });
    }
  }

  handleShowMore() {
    this.setState({
      showMore: !this.state.showMore
    });
  }

  componentDidMount() {
    let productId = this.props.selectedProduct.id;
    let params = `?product_id=${productId}`;
    // let params = `?product_id=40347`; //40347
    Parse.getAll(`qa/questions`, params)
      .then((questions) => {
        let results = questions.data.results;
        return results.sort((a,b) => b.question_helpfulness - a.question_helpfulness);
      })
      .then((results) => {
        this.setState({
          questions: results,
          filtered: results
        })
        console.log(this.state.questions);
      })
  }


  render() {
    let questionList;

    if(this.state.showMore) {
      questionList = this.state.filtered.map(question =>
        <RelevantQ key={question.question_id} question={question} />)
    } else {
      questionList = this.state.filtered.slice(0, this.state.count).map(question =>
        <RelevantQ key={question.question_id} question={question} />
      )
    }

    return(
      <div className='qanda'>
        <h2 className='qanda-heading'>QUESTIONS AND ANSWERS</h2>
        {this.state.filtered.length ?
        <div className='question-body'>
          <QandASearch searchQuestion={this.searchQuestion} />
          <div className='question-list'>
            {questionList}
          </div>
          <div>
            <button
              className= 'show-more-or-less'
              onClick={this.handleShowMore}>
              {this.state.showMore ? 'Show Less' : 'More Answered Questions'}
            </button>
            <button
              className='show-more-or-less'>
              Add a Question +
            </button>
          </div>
        </div> :
        <div className='question-body'>
          <div>
            <button> Add a Question + </button>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default QandA;