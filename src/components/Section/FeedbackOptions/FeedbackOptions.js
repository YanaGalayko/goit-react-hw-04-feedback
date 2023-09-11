import { FeedbackList,
         FeedbackBtn } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
return (
    <FeedbackList>
        {options.map(option => {
            return (
                <li key={option}>
                    <FeedbackBtn
                     type="button"
                     onClick={() => onLeaveFeedback(option)}
                     >
                    {option}
                    </FeedbackBtn>
                </li>
            )
        })}
    </FeedbackList>
)
}