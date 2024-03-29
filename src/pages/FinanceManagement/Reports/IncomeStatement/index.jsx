import React, { useState, useEffect, useContext } from "react";
import IncomeStatement from "./IncomeStatement";
import {
  selectFetchStatus,
  selectAddStatus,
  selectIncomeStatements,
  Fetch,
  Add,
  selectEditStatus,
  Edit,
  selectDeleteStatus,
  Remove,
} from "../../../../store/Finance/Reports/IncomeStatement/";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { reduxStatus } from "../../../../constants/reduxStatus";
import { toggle } from "../../../../store/ModalData";
import { MainContext } from "../../../../context/Main";
import {
  setPageValues,
  getState,
} from "../../../../context/Main/States/Pagination";
import { activeTabs } from "../../LedgerEntries";
import { SearchContext } from "../../../../context/";
import { FilterByName } from "../../../../helpers/Filter";
import { Input } from "reactstrap";
import {
  assignFilterComponent,
  setLockComponent,
} from "../../../../context/Main/States/search";

const Loader = ({
  fetchStatus,
  addStatus,
  incomeStatements,
  fetchIncomeStatement,
  addIncomeStatement,
  editStatus,
  editIncomeStatement,
  deleteStatus,
  deleteIncomeStatement,
  toggle,
  activeTab,
}) => {
  const [fetchLock, setFetchLock] = useState(true);
  const [addLock, setAddLock] = useState(true);
  const [editLock, setEditLock] = useState(true);
  const [deleteLock, setDeleteLock] = useState(true);
  const [filterType, setFilterType] = useState("document_number");
  const [data, setData] = useState([]);

  const { rootState, dispatch } = useContext(MainContext);

  useEffect(() => {
    // try {
    //   const {
    //     options: { offset, limit, onClick },
    //   } = getState(rootState);
    //   if (onClick && activeTab === activeTabs.BANK_LEDGER_ENTRY) {
    //     fetchIncomeStatement([
    //       { key: "offset", value: offset },
    //       { key: "limit", value: limit },
    //     ]);
    //   }
    // } catch (e) {}
  }, [getState(rootState)]);
  const FilterTypes = () => {
    const [selectedFilter, setFilter] = useState(filterType);

    useEffect(() => setFilterType(selectedFilter), [selectedFilter]);

    return (
      <>
        <Input
          type="select"
          onChange={({ currentTarget: { value } }) => setFilter(value)}
        >
          <option value="type">By Type</option>
          <option value="subAccountType">By Chart of Account Type</option>
        </Input>
      </>
    );
  };

  useEffect(() => {
    setLockComponent({}, dispatch, false);
    assignFilterComponent({}, dispatch, FilterTypes);
  }, [dispatch]);

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setData(incomeStatements);
  }, [incomeStatements, setData]);

  useEffect(() => {
    setData(FilterByName(incomeStatements, filterType, searchValue));
  }, [searchValue, setData, filterType]);

  useEffect(() => {
    setFetchLock(false);
    fetchIncomeStatement();
  }, [fetchIncomeStatement, setFetchLock]);

  useEffect(() => {
    const { status, response } = fetchStatus;
    if (status === reduxStatus.failure && !fetchLock) {
      toast.error("Failed Fetching Bank Ledger Entries");
      setFetchLock(true);
    } else {
      if (activeTab === activeTabs.BANK_LEDGER_ENTRY) {
        setPageValues(rootState, dispatch, response, "", activeTab);
      }
    }
  }, [fetchStatus, setFetchLock, activeTab]);

  useEffect(() => {
    const { status } = addStatus;
    if (status === reduxStatus.failure && !addLock) {
      setAddLock(true);
    } else if (status === reduxStatus.success && !addLock) {
      toast.success("Added Bank Account");
      setAddLock(true);
    }
  }, [addStatus, setAddLock]);

  useEffect(() => {
    const { status } = editStatus;
    if (status === reduxStatus.failure && !editLock) {
      setEditLock(true);
    } else if (status === reduxStatus.success && !editLock) {
      toast.success("Edited Bank Account");
      setEditLock(true);
    }
  }, [editStatus, setEditLock]);

  useEffect(() => {
    const { status } = deleteStatus;
    if (status === reduxStatus.failure && !deleteLock) {
      setDeleteLock(true);
    } else if (status === reduxStatus.success && !deleteLock) {
      toast.success("Deleted Bank Account");
      setDeleteLock(true);
    }
  }, [deleteStatus, setDeleteLock]);

  const _addIncomeStatement = (data) => {
    setAddLock(false);
    const requestBody = {
      bank_account_code: data.IncomeStatementCode
        ? data.IncomeStatementCode
        : "",
      branch_name: data.bankBranch ? data.bankBranch : "",
      account_number: data.IncomeStatementNumber
        ? Number(data.IncomeStatementNumber)
        : 0,
      is_active: data.isActive ? Boolean(data.isActive) : "",
      phone_no: data.phoneNumber ? data.phoneNumber : "",
      Postal_code: data.IncomeStatementCode ? data.IncomeStatementCode : "",
      fax_no: data.faxNumber ? data.faxNumber : "",
      email: data.emailAdress ? data.emailAdress : "",
      remarks: data.remarks ? data.remarks : "",
      bank: data.bankName ? data.bankName : "",
      charts_of_account: data.chartsOfAccountNumber
        ? data.chartsOfAccountNumber
        : "",
      currency: data.currency ? data.currency : "",
      region: data.region ? data.region : "",
      city: data.city ? data.city : "",
    };

    addIncomeStatement(requestBody);
  };

  const _editIncomeStatement = (data) => {
    setEditLock(false);
    const requestBody = {
      id: data.id ? data.id : "",
      bank_account_code: data.IncomeStatementCode
        ? data.IncomeStatementCode
        : "",
      branch_name: data.bankBranch ? data.bankBranch : "",
      account_number: data.IncomeStatementNumber
        ? Number(data.IncomeStatementNumber)
        : 0,
      is_active: data.isActive ? Boolean(data.isActive) : "",
      phone_no: data.phoneNumber ? data.phoneNumber : "",
      Postal_code: data.IncomeStatementCode ? data.IncomeStatementCode : "",
      fax_no: data.faxNumber ? data.faxNumber : "",
      email: data.emailAdress ? data.emailAdress : "",
      remarks: data.remarks ? data.remarks : "",
      bank: data.bankName ? data.bankName : "",
      charts_of_account: data.chartsOfAccountNumber
        ? data.chartsOfAccountNumber
        : "",
      currency: data.currency ? data.currency : "",
      region: data.region ? data.region : "",
      city: data.city ? data.city : "",
    };

    editIncomeStatement(requestBody);
  };

  const _deleteIncomeStatement = (id) => {
    setDeleteLock(false);
    deleteIncomeStatement(id);
  };
  return (
    <IncomeStatement
      incomeStatements={data}
      filterType={filterType}
      searchValue={searchValue}
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      addIncomeStatement={_addIncomeStatement}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      editIncomeStatement={_editIncomeStatement}
      doneDelete={deleteStatus.status === reduxStatus.success && !deleteLock}
      deleteIncomeStatement={_deleteIncomeStatement}
      _toggle={toggle}
    />
    
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  incomeStatements: selectIncomeStatements(state),
  editStatus: selectEditStatus(state),
  deleteStatus: selectDeleteStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchIncomeStatement: (data = null) => dispatch(Fetch(data)),
  addIncomeStatement: (data) => dispatch(Add(data)),
  editIncomeStatement: (data) => dispatch(Edit(data)),
  deleteIncomeStatement: (id) => dispatch(Remove(id)),
  toggle: (data) => dispatch(toggle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
