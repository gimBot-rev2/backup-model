import React from "react";
import { Card, CardBody, Form, Row, Col } from "reactstrap";
import ReusabelForm from "../../../common/form";
import { InlineTable } from "../../../common/InLineEditableTable";
import {
  initialState,
  mainSchema,
  getColumns,
  lineSchema,
  lineContentMapper,
  populateState,
  saveLineTag,
  apiLineTag,
} from "./config";

class TransferForm extends ReusabelForm {
  constructor(props) {
    super(props);
    this.initialState = initialState;
    this.state = JSON.parse(JSON.stringify(this.initialState));
    this.schema = mainSchema;
    this.handleLineSave = this.handleLineSave.bind(this);
    this.populateState = this.populateState.bind(this);
    this.updateLines = this.updateLines.bind(this);
    this.lineMapper = this.lineMapper.bind(this);
  }

  doSubmit = async () => {
    this.props.submit(this.state.data);
  };

  componentDidMount() {
    this.componentDidUpdate();
  }

  lineMapper() {
    if (this.props.isEdit || this.props.isView) {
      return lineContentMapper(this.props.data, apiLineTag);
    } else {
      return [];
    }
  }

  populateState(data) {
    const newData = populateState(data, this.lineMapper);
    this.setState({ lockUpdate: true, data: newData });
  }

  updateLines(lines) {
    if (lines.length > 0 || this.state.data[saveLineTag].length > 0) {
      this.setState({
        data: {
          ...this.state.data,
          [saveLineTag]: lines,
        },
      });
    }
  }

  componentDidUpdate() {
    if ((this.props.isEdit || this.props.isView) && !this.state.lockUpdate) {
      this.populateState(this.props.data);
    }
  }

  handleLineSave(data) {
    this.setState({
      data: {
        ...this.state.data,
        [saveLineTag]: data,
      },
    });
  }

  render() {
    return (
      <Card className="border-0">
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect("status", "Status", [
                  "Open",
                  "Approved",
                  "Posted",
                ])}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput("date", "Date", "date")}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput("document_number", "Document Number")}
              </Col>
              <Col md={12} sm={6} xs={12}>
                {this.renderInput("description", "Description", "textarea")}
              </Col>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput("remarks", "Remarks", "textarea")}
              </Col>
              <Col md={12} sm={12} xs={12}>
                <InlineTable
                  columns={getColumns(this.props.options)}
                  disabled={this.props.disabled}
                  data={this.state.data[saveLineTag]}
                  callback={this.updateLines}
                  startForm={this.props.isAdd}
                  schema={lineSchema}
                />
              </Col>
              <Col align="center">{this.renderButton("Save")}</Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default TransferForm;
