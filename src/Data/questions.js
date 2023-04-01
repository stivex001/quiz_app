const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Paris", "New York", "Tokyo"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the currency of Japan?",
    options: ["Dollar", "Pound", "Yen", "Euro"],
    answer: "Yen",
  },
  {
    id: 3,
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Guglielmo Marconi",
      "Nikola Tesla",
    ],
    answer: "Alexander Graham Bell",
  },
];

export default quizData;

const QuizForm = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleOptionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <QuizContainer>
      {quizData.map((quizItem, index) => (
        <div key={index}>
          <Question>{quizItem.question}</Question>
          {quizItem.options.map((option, optionIndex) => (
            <Option
              key={optionIndex}
              isSelected={selectedAnswer === option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Option>
          ))}
        </div>
      ))}
    </QuizContainer>
  );
};

const Option = styled.div`
  background-color: ${(props) => (props.isSelected ? "#4CAF50" : "#ffffff")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

return (
  <QuizContainer>
    {quizData.map((quizItem, index) => (
      <div key={index}>
        <Question>{quizItem.question}</Question>
        {quizItem.options.map((option, optionIndex) => (
          <Option
            key={optionIndex}
            isSelected={selectedAnswer === option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </Option>
        ))}
      </div>
    ))}
  </QuizContainer>
);

// const fetchQuestions = [
//     {
//         id: 1,
//         category: 'Entertainment: Television',
//         correct_answer: 'Radar',
//         difficulty: 'easy',
//         question: 'What is a company ',
//         type: 'multiple',
//         incorrect_answers: [
//             {
//                 id: 1,
//                 answer: 'Hawkeye'

//             },
//             {
//                 id: 2,
//                 answer: 'Hot Lips',

//             },
//             {
//                 id: 3,
//                 answer: 'Trapper',

//             }
//         ]

//     }
// ]
