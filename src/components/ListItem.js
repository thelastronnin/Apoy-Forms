import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

class ListItem extends React.Component {
  delete_Household_Item = async (value) => {
    await fetch(`http://localhost:5000/household/${value}`, {
      method: "DELETE",
    });
  };

  render() {
    const { values, onEdit } = this.props;
    return (
      <>
        <li className="list-group-item">
          <div className="div-list-item-container">
            <div>{values.address}</div>
            <div className="div-list-item-action-container">
              <AiOutlineEdit
                size="25"
                onClick={() =>
                  onEdit(
                    values.id,
                    values.address,
                    values.total_persons,
                    values.clean_water,
                    values.monthly_income,
                    values.informal_settler
                  )
                }
              />
              <AiOutlineDelete
                size="25"
                onClick={() => this.delete_Household_Item(values.id)}
              />
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default ListItem;
