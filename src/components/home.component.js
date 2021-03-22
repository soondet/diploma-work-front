import React, { Component } from "react";
import { DatePicker, Space, Select } from "antd";
import "antd/dist/antd.css";
import UserService from "../services/user.service";

const { RangePicker } = DatePicker;
const { Option } = Select;
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }
  onOk(value) {
    console.log("onOk: ", value);
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>

          <DatePicker
            showTime
            onChange={this.onChange}
            onOk={this.onOk}
            renderExtraFooter={() => <h5>Please press OK after choosing</h5>}
          />
        </header>
      </div>
    );
  }
}
