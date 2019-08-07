import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { VictoryPie } from "victory";
import { fetchTasks } from "../../actions";

class TaskGraph extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderGraph = () => {
    this.userTasks = this.props.tasks.filter(
      task => task.userId === this.props.currentUserId
    );

    this.tempData = [];

    this.userTasks.forEach(task => {
      this.tempData.push(_.pick(task, "category", "duration"));
    });

    this.data = this.tempData.map(item => {
      return { x: item.category, y: parseFloat(item.duration) };
    });

    this.newData = [];

    // for (var i = this.data.length - 1; i > 0; i--) {
    //   for (var j = this.data.length - 2; j > 0; j--) {
    //     if (this.data[i].x === this.data[j].x && i !== j) {
    //       this.data[i].y += this.data[j].y;
    //       this.data.splice(j, 1);
          
    //     }
    //   }
    // }

    console.log(this.newData);

    if (this.props.isSignedIn) {
      return (
        <div>
          <VictoryPie
            data={this.data}
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            innerRadius={40}
            padAngle={1}
            height={225}
            animate={{
              onLoad: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: "orange",
                  label: "BYE"
                })
              }
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Please sign in.</h1>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderGraph()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.tasks),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchTasks }
)(TaskGraph);
