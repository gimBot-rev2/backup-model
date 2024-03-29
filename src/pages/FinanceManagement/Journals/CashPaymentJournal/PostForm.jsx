import React from "react";
import ParentForm from "../../../common/form";
import Joi from "joi-browser";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  Row,
  Col,
} from "reactstrap";

class PostForm extends ParentForm {
  constructor(props) {
    super(props);
    this.initialState = {
      data: {
        id: "",
        posting_date: "",
      },
      errors: {},
    };
    this.state = this.initialState;
    this.schema = {
      id: Joi.string().allow("").optional(),
      posting_date: Joi.string().required().label("Posting Date"),
    };
  }

  populateState(data) {
    const updatedState = {
      ...this.state,
      data: {
        id: data.id ? data.id : "",
        posting_date: data.posting_date ? data.posting_date : "",
      },
      lockUpdate: true,
    };
    this.setState(updatedState);
  }

  componentDidUpdate() {
    if ((this.props.isEdit || this.props.isView) && !this.state.lockUpdate) {
      this.populateState(this.props.data);
    }
  }

  doSubmit() {
    this.props.submit(this.state.data);
  }

  render() {
    return (
      <Card className="border-0">
        <CardHeader className="border-0">{this.props.title}</CardHeader>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "posting_date",
                  label: "Posting Date",
                  type: "date",
                })}
              </Col>
            </Row>
            <CardFooter align="center">{this.renderButton("Post")}</CardFooter>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default PostForm;
