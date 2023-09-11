import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Section/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Section/Statistics/Statistics";
import { Notification } from "./Section/Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
    return {
      [option]: prevState[option] + 1,
           }
    })
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  }

  render() {
    const options = Object.keys(this.state);

    const { good, neutral, bad } = this.state;

    return (
  <Layout>
    <Section title="Please leave feedback">
      <FeedbackOptions
      options={options} 
      onLeaveFeedback={this.onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
     {this.countTotalFeedback() ? 
     ( <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={this.countTotalFeedback}
      positivePercentage={this.countPositiveFeedbackPercentage()}
      />) : 
      (<Notification message="There is no feedback"/>)}
    </Section>
    <GlobalStyle/>
  </Layout>
    );
  }  
};

