import React, { useState, useEffect } from "react";
import ParentForm from "../../../common/form";
import Joi from "joi-browser";

import {
  Card,
  CardBody,
  CardFooter,
  Table,
  Input,
  Form,
  Row,
  Col,
} from "reactstrap";

const InputRow = () => {
  const [numberOfRows, setRows] = useState(1);
  const [finishedRows, setFinished] = useState(0);
  const initialRow = {
    itemCategory: "",
    itemNo: "",
    itemName: "",
    quantity: "",
    unitMeasure: "",
    estimatedUnitPrice: "",
    estimatedNewAmount: "",
    currency: "",
    remarks: "",
    finished: false,
  };
  const [data, setData] = useState([initialRow]);

  const handleChange = (event) => {
    const { name, value, title } = event.target;
    const index = Number(title);

    if (typeof data[Number(title)] === "undefined") {
      return null;
    }
    data[index] = {
      ...data[index],
      [name]: value,
    };
    setData(JSON.parse(JSON.stringify(data)));
    if (finishedRows + 1 === numberOfRows) {
      setRows(numberOfRows + 1);
      setData(data.concat(initialRow));
    }
  };

  useEffect(() => {
    data.forEach((state, idx) => {
      var emptyRow = false;
      for (var prop in state) {
        if (typeof state[prop] !== "boolean") {
          if (String(state[prop]) === "") {
            var updatedData = data;
            updatedData[idx] = {
              ...data[idx],
              finished: false,
            };
            setData(updatedData);
            emptyRow = true;
          }
        }
      }
      if (!emptyRow) {
        var _updatedData = data;
        _updatedData[idx] = {
          ...data[idx],
          finished: true,
        };
        setData(_updatedData);
      }
    });
    const finishedRows = data.filter((item) => item.finished);
    setFinished(finishedRows.length);
  }, [data]);

  return Array(numberOfRows)
    .fill("")
    .map((_, idx) => (
      <tr key={idx}>
        <td>
          <Input
            className="border-0"
            size="sm"
            type="select"
            name="itemCategory"
            id="itemCategory"
            onChange={handleChange}
            title={idx}
          >
            <option>Category 1</option>
            <option>Category 3</option>
            <option>Category 4</option>
            <option>Category 5</option>
            <option>Category 2</option>
          </Input>
        </td>

        <td>
          <Input
            className="border-0"
            size="sm"
            type="select"
            name="itemNo"
            id="itemNo"
            onChange={handleChange}
            title={idx}
          >
            <option>Item No 1</option>
            <option>Item No 2</option>
            <option>Item No 3</option>
            <option>Item No 4</option>
            <option>Item No 5</option>
          </Input>
        </td>
        <td>
          <Input
            size="sm"
            className="border-0"
            type="text"
            name="itemName"
            id="itemName"
            placeholder="Item Name "
            onChange={handleChange}
            title={idx}
          />
        </td>

        <td>
          <Input
            size="sm"
            className="border-0"
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            onChange={handleChange}
            title={idx}
          />
        </td>
        <td>
          <Input
            size="sm"
            className="border-0"
            type="text"
            name="unitMeasure"
            id="unitMeasure"
            placeholder="Unit of Measurement "
            onChange={handleChange}
            title={idx}
          />
        </td>
        <td>
          <Input
            size="sm"
            className="border-0"
            type="text"
            name="unitPrice"
            id="unitPrice"
            placeholder="Unit Price"
            onChange={handleChange}
            title={idx}
          />
        </td>
        <td>
          <Input
            size="sm"
            className="border-0"
            type="text"
            name="netPrice"
            id="netPrice"
            placeholder="Net Price "
            onChange={handleChange}
            title={idx}
          />
        </td>

        <td>
          <Input
            size="sm"
            className="border-0"
            type="text"
            name="currency"
            id="currency"
            placeholder="Currency "
            onChange={handleChange}
            title={idx}
          />
        </td>

        <td>
          <Input
            size="sm"
            className="border-0"
            type="text"
            name="remarks"
            id="remarks"
            placeholder="Remarks"
            onChange={handleChange}
            title={idx}
          />
        </td>
      </tr>
    ));
};

class PurcahseRequisitionAdd extends ParentForm {
  constructor(props) {
    super(props);
    this.initialState = {
      data: {
        documentNumber: "",
        requestDate: "",
        orderDate: "",
        vendorNumber: "",
        vendorName: "",
        requestPurpose: "",
        requestorDepartment: "",
        requestedBy: "",
        preparedBy: "",
        purchaseType: "",
        postingDate: "",
        approvedBy: "",
        approvedDate: "",
        status: "",
        remarks: "",
      },
      errors: {},
    };
    this.state = this.initialState;
    this.schema = {
      documentNumber: Joi.string().required().label("documentNumber"),
      requestDate: Joi.string().required().label("requestDate"),
      orderDate: Joi.string().required().label("orderDate"),
      vendorNumber: Joi.string().required().label("vendorNumber"),
      vendorName: Joi.string().required().label("vendorName"),
      requestPurpose: Joi.string().required().label("requestPurpose"),

      requestorDepartment: Joi.string().required().label("requestorDepartment"),
      requestedBy: Joi.string().required().label("requestedBy"),
      preparedBy: Joi.string().required().label("preparedBy"),
      purchaseType: Joi.string().required().label("purchaseType"),
      postingDate: Joi.string().required().label("postingDate"),
      approvedBy: Joi.string().required().label("approvedBy"),

      approvedDate: Joi.string().required().label("approvedDate"),
      status: Joi.string().required().label("status"),
      remarks: Joi.string().allow("").optional(),
    };
  }

  render() {
    return (
      <Card className="border-0">
        <CardBody>
          <Form>
            <Row>
              <Col md={6} sm={6} xs={12}>
                {this.renderInput("documentNumber", "Document Number ")}
              </Col>
              <Col md={6} sm={6} xs={12}>
                {this.renderInput("requestDate", "Request Date")}
              </Col>
              <Col md={3} sm={6} xs={12}>
                {this.renderInput("OrderDate", "Order Date", "date")}
              </Col>
              <Col md={3} sm={6} xs={12}>
                {this.renderSelect("vendorNo", "Vendor Number ", [
                  "Vendor One",
                  "Vendor two",
                  "vendor vendor vendor ",
                ])}
              </Col>
              <Col md={3} sm={6} xs={12}>
                {this.renderInput("vendorName", "Vedor Name ")}
              </Col>
              <Col md={3} sm={6} xs={12}>
                {this.renderInput("requestPurpose", "Request Purpose  ")}
              </Col>

              <Col md={3} sm={6} xs={12}>
                {this.renderSelect(
                  "requestorDepartment",
                  "Requestor Department ",
                  ["department 1", "department 2", "deprtment 3"]
                )}
              </Col>
              <Col md={3} sm={6} xs={12}>
                {this.renderSelect("requestedBy", "Requested By", [
                  "person 1",
                  "person 2",
                  "person 3",
                ])}
              </Col>
              <Col md={3} sm={6} xs={12}>
                {this.renderInput("preparedBy", "Prepared BY  ")}
              </Col>
              <Col md={3} sm={6} xs={12}>
                {this.renderSelect("purchaseType", "Purchase Type ", [
                  "Type 1",
                  "type 2",
                ])}
              </Col>
              <Col md={6} sm={6} xs={12}>
                {this.renderInput("postingDate", "Posting Date", "date")}
              </Col>
              <Col md={6} sm={6} xs={12}>
                {this.renderSelect("approvedBy", "Approved By", [
                  "person 1",
                  "person 2",
                  "person 3",
                ])}
              </Col>
              <Col md={6} sm={6} xs={12}>
                {this.renderInput("approvedDate", "Approved Date", "date")}
              </Col>
              <Col md={6} sm={6} xs={12}>
                {this.renderInput("status", "status")}
              </Col>

              <Col md={12} sm={12} xs={12}>
                {this.renderInput("remarks", "Remarks", "textarea")}
              </Col>
            </Row>
          </Form>
        </CardBody>

        <hr />
        <CardBody>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Item Category Code </th>
                <th>Item No</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Uit Measure</th>
                <th>Unit Price</th>
                <th>Net Amount</th>
                <th>Currency</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item Category Code </td>
                <td>Item No</td>
                <td>Item Name</td>
                <td>Quantity</td>
                <td>Uit Measure</td>
                <td>Unit Price</td>
                <td>Net Amount</td>
                <td>Currency</td>
                <td>Remarks</td>
              </tr>
              <InputRow />
            </tbody>
          </Table>
          <CardFooter align="center">
            {this.renderButton("Add Purchase Requisition")}
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}
export default PurcahseRequisitionAdd;
