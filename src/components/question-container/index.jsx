import React from 'react'
import styles from './styles.module.css'
import { QuestionBox } from '../question-box'

function QuestionContainer() {
    const data = {
        question1: {
            question:"Can I use FrontendPro to prepare for a frontend job interview?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante risus, vulputate ut elit et, eleifend posuere purus. Nullam quis mattis libero. Aenean consectetur ligula dui, eu vehicula nisl mollis vel. ",
            variant:"orange"
        },
        question2: {
            question:"Do I need to have experience in frontend dev to use FrontendPro?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante risus, vulputate ut elit et, eleifend posuere purus. Nullam quis mattis libero. Aenean consectetur ligula dui, eu vehicula nisl mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante risus, vulputate ut elit et, eleifend posuere purus. Nullam quis mattis libero. Aenean consectetur ligula dui, eu vehicula nisl mollis vel. ",
            variant:"blue"
        },
        question3: {
            question:"How often are new challenges added to FrontendPro?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante risus, vulputate ut elit et, eleifend posuere purus. Nullam quis mattis libero. Aenean consectetur ligula dui, eu vehicula nisl mollis vel. ",
            variant:"purple"
        },
        question4: {
            question:"What kind of frontend challenges can I expect to find on FrontendPro?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante risus, vulputate ut elit et, eleifend posuere purus. Nullam quis mattis libero. Aenean consectetur ligula dui, eu vehicula nisl mollis vel. ",
            variant:"pink"
        },
        question5: {
            question:"Can I use libraries/frameworks on these projects?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante risus, vulputate ut elit et, eleifend posuere purus. Nullam quis mattis libero. Aenean consectetur ligula dui, eu vehicula nisl mollis vel. ",
            variant:"green"
        },
        
    }
  return (
    <div className={styles.questionContainer}>
        <div className={styles.header}>
        <h2>Frequently Asked Questions</h2>
        <p>Answers to common questions about 
        our frontend challenges website.</p>
        </div>
      <QuestionBox data = {data.question1} variant={data.question1.variant}></QuestionBox>
      <QuestionBox data = {data.question2} variant={data.question2.variant}></QuestionBox>
      <QuestionBox data = {data.question3} variant={data.question3.variant}></QuestionBox>
      <QuestionBox data = {data.question4} variant={data.question4.variant}></QuestionBox>
      <QuestionBox data = {data.question5} variant={data.question5.variant}></QuestionBox>
    </div>
  )
}

export default QuestionContainer