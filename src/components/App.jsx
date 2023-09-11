import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Section/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Section/Statistics/Statistics";
import { Notification } from "./Section/Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = options;
  const optionsKeys = Object.keys(options);
  
  const onLeaveFeedback = option => {
    setOptions(prevOptions => {
      return { ...prevOptions, [option]: prevOptions[option] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  }

  return (
<Layout>
    <Section title="Please leave feedback">
      <FeedbackOptions
      options={optionsKeys} 
      onLeaveFeedback={onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
     {countTotalFeedback() ? 
     ( <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback}
      positivePercentage={countPositiveFeedbackPercentage()}
      />) : 
      (<Notification message="There is no feedback"/>)}
    </Section>
    <GlobalStyle/>
  </Layout>
  )
}



 
  


