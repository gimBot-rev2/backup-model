import React, { useReducer, useEffect } from "react";
import Page from "../../../../components/Page";
import { Card, CardBody, Button, Col } from "reactstrap";
import CommonModals from "../../../../components/CommonModal";
import GeneralPostingGroupAdd from "./GeneralPostingGroupAdd";
import CustomTable from "../../../common/table";
import { reverse } from "../../../../helpers/reverse";
import { MdRemoveRedEye, MdEdit, MdDelete } from "react-icons/md";
import { _toggle, reducer, initialState } from "../../../common/ModalOptions";
import { getDateFormat } from "../../../../helpers/date";

const GeneralPostingGroup = ({
  postingGroups,
  addGeneralBusinessPostingGroup,
  editGeneralBusinessPostingGroup,
  deleteGeneralBusinessPostingGroup,
  doneAdd,
  doneEdit,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const okDelete = (id) => {
    deleteGeneralBusinessPostingGroup(id);
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
                  Component: GeneralPostingGroupAdd,
                  data: postingGroup,
                  title: "Add General Posting Group",
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
                  Component: GeneralPostingGroupAdd,
                  data: postingGroup,
                  submit: editGeneralBusinessPostingGroup,
                  title: "Edit General Posting Group",
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
                  Component: GeneralPostingGroupAdd,
                  submit: addGeneralBusinessPostingGroup,
                  title: "Add General Posting Group",
                },
                dispatch
              )
            }
            outline
            size="sm"
          >
            New General Posting Group
          </Button>
        </Col>
        <Card className="border-0">
          <Col md={12} sm={12} xs={12}></Col>
          <CardBody>
            <CustomTable
              title="General Posting Group "
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
export default GeneralPostingGroup;
