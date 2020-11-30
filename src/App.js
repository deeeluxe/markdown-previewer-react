import React from "react";
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({
      markdown,
    });
  }

  render() {
    var variableOne = "Lorem Ipsum";
    var variableTwo = "Lorem Ipsum";
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Editor
                  </Badge>
                </h4>
                <div className="mark-input">
                  <textarea
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value);
                    }}
                    className="input"
                    style={inputStyle}
                    value={this.state.markdown}
                  >
                    {console.log(this.state.markdown)}
                  </textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Previewer
                  </Badge>
                </h4>
                <div
                  style={outputStyle}
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
