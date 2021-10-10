import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { quizzesOperations, quizzesSelectors } from "../../redux/quizzes";

class AllCoursesView extends Component {
  componentDidMount() {
    console.log("start");
    axios.get("/api/users").then((res) => {
      console.log(res, "res");
    });
    console.log("end");
    // this.props.onFetchQuizzes();
  }

  render() {
    const { allQuiz, match } = this.props;

    return (
      <div>
        <h1>AllCourses</h1>
        <section>
          <ul>
            {allQuiz.map(
              ({ title, author, id, questionCount, time, questionItems }) => (
                <li key={id}>
                  <h3>Level course: {title}</h3>
                  <p>Question Count: {questionCount}</p>
                  <p>Time {time} minute</p>
                  <p>Author: {author}</p>

                  <button>
                    <Link
                      to={{
                        pathname: `${match.url}/${id}`,
                        state: { getQuestions: questionItems },
                      }}
                    >
                      Start
                    </Link>
                  </button>
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allQuiz: quizzesSelectors.getLevel(state),
});

const mapDispatchToProps = {
  onFetchQuizzes: quizzesOperations.fetchQuizzes,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCoursesView);
