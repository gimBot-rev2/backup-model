import React, { useReducer, useEffect } from "react";
import Page from "../../../../components/Page";
import { Card, CardBody, Button, Col } from "reactstrap";
import CommonModals from "../../../../components/CommonModal";
import CustomerPostingGroupForm from "./CustomerPostingGroupForm";
import CustomTable from "../../../common/table";
import { reverse } from "../../../../helpers/reverse";
import { MdRemoveRedEye, MdEdit, MdDelete } from "react-icons/md";
import { _toggle, reducer, initialState } from "../../../common/ModalOptions";
import { getDateFormat } from "../../../../helpers/date";

const CustomerPostingGroup = ({
  postingGroups,
  addCustomerPostingGroup,
  editCustomerPostingGroup,
  deleteCustomerPostingGroup,
  doneAdd,
  doneEdit,
  accounts,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const okDelete = (id) => {
    deleteCustomerPostingGroup(id);
  };

  useEffect(() => {
    if (doneAdd || doneEdit) {
      _toggle({ type: "CLOSE" }, dispatch);
    }
  }, [doneAdd, doneEdit]);

  const columns = [
    { path: "name", label: "Name" },
    { path: "updated_at", label: "Last Modified" },
    {
      key: "view",
      label: "Actions",
      content: (postingGroup) => (
        <>
          <Button
            className="m-1"
            size="sm"
            outline
            color="blue"
            onClick={() => {
              _toggle(
                {
                  type: "VIEW",
                  Component: CustomerPostingGroupForm,
                  data: postingGroup,
                  title: "View Customer Posting Group",
                  options: { accounts },
                },
                dispatch
              );
            }}
          >
            <MdRemoveRedEye />
          </Button>
          <Button
            className="m-1"
            size="sm"
            outline
            color="warning"
            onClick={() => {
              _toggle(
                {
                  type: "EDIT",
                  Component: CustomerPostingGroupForm,
                  data: postingGroup,
                  submit: editCustomerPostingGroup,
                  title: "Edit Customer Posting Group",
                  options: { accounts },
                },
                dispatch
              );
            }}
          >
            <MdEdit />
          </Button>
          <Button
            className="m-1"
            size="sm"
            outline
            color="danger"
            onClick={() => {
              _toggle(
                {
                  type: "DELETE",
                  deleteOptions: {
                    okCallback: okDelete,
                    title: "Are you sure?",
                    id: postingGroup.id,
                    message: "",
                  },
                },
                dispatch
              );
            }}
          >
            <MdDelete />
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <CommonModals
        size="xl"
        data={state.data}
        openModal={state.openModal}
        component={state.Component}
        title={state.title}
        toggle={_toggle}
        dispatch={dispatch}
      />

      <Page>
        <Col align="right" className="newButton">
          <Button
            onClick={() =>
              _toggle(
                {
                  type: "ADD",
                  Component: CustomerPostingGroupForm,
                  submit: addCustomerPostingGroup,
                  title: "Add Customer Posting Group",
                  options: { accounts },
                },
                dispatch
              )
            }
            outline
            size="sm"
          >
            New Customer Posting Group
          </Button>
        </Col>
        <Card className="mainTable">
          <CardBody>
            <CustomTable
              title="Customer Posting Group"
              columns={columns}
              data={reverse(
                postingGroups.map((postingGroup) => ({
                  ...postingGroup,
                  updated_at: getDateFormat(postingGroup.updated_at),
                }))
              )}
            />
          </CardBody>
        </Card>
      </Page>
    </div>
  );
};
export default CustomerPostingGroup;