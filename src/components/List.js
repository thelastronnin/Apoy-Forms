import React from "react";

import ListItem from "./ListItem";
import InputField from "./InputField";
import Form1 from "./Form1";

// FOR ADD
import { AiOutlinePlusCircle, AiOutlineCloseSquare } from "react-icons/ai";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 5,
      search: "",
      showAddForm: false,
      showEditForm: false,
      edit_form_values: [],
      edit_id: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * 10000) + 1;
    this.setState({
      edit_form_values: [
        {
          id: id,
          address: "",
          total_persons: "",
          clean_water: false,
          monthly_income: "",
          informal_settler: false,
        },
      ],
    });
  }

  edit = (
    id,
    address,
    total_persons,
    clean_water,
    monthly_income,
    informal_settler
  ) => {
    this.setState({
      edit_form_values: [
        {
          id: Number(id),
          address: String(address),
          total_persons: String(total_persons),
          clean_water: clean_water,
          monthly_income: String(monthly_income),
          informal_settler: informal_settler,
        },
      ],
      showEditForm: true,
    });
  };

  onChangeSearch = (value) => {
    this.setState({
      search: value,
    });
  };

  onClickAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm,
    });
  };

  onClickEditForm = () => {
    this.setState({
      showEditForm: !this.state.showEditForm,
    });
  };

  render() {
    var { values } = this.props;
    var { search } = this.state;
    const { currentPage, itemsPerPage } = this.state;

    // SEARCH
    if (search !== "") {
      values = values.filter((x) =>
        x.address.toLowerCase().match(search.toLowerCase())
      );
    }

    // PAGINATION
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = values.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(values.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <p key={number} id={number} onClick={this.handleClick}>
          {number}
        </p>
      );
    });

    // SEARCH
    var onChangeSearh = (value) => {
      this.onChangeSearch(value);
    };

    return (
      <>
        <div>
          {this.state.showAddForm === false &&
            this.state.showEditForm === false && (
              <>
                <div>
                  <InputField
                    iFLabel=""
                    iFType="text"
                    iFPlaceholder="Search"
                    iFvalue={this.state.search}
                    onChange={(e) => onChangeSearh(e.target.value)}
                    iFErrorMessage=""
                    maxlength="255"
                  />
                </div>
                <div className="div-list-container">
                  <ul className="list-group">
                    {currentItems.map((value) => (
                      <ListItem values={value} onEdit={this.edit} />
                    ))}
                  </ul>
                </div>

                <div className="div-add-container">
                  <AiOutlinePlusCircle
                    size="60"
                    onClick={() => this.onClickAddForm()}
                  />
                </div>

                <div className="pagination">{renderPageNumbers}</div>
              </>
            )}

          {this.state.showAddForm === true && (
            <>
              <div className="btn-position">
                <AiOutlineCloseSquare
                  size="30"
                  onClick={() => this.onClickAddForm()}
                />
              </div>
              <br />
              <p>This is add</p>
              <br />
              <Form1 edit_form_values={this.state.edit_form_values} />
            </>
          )}

          {this.state.showEditForm === true && (
            <>
              <div className="btn-position">
                <AiOutlineCloseSquare
                  size="30"
                  onClick={() => this.onClickEditForm()}
                />
              </div>
              <br />
              <p>This is edit</p>
              <br />
              <Form1 edit_form_values={this.state.edit_form_values} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default List;
