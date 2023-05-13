import React from 'react';
import PropTypes from 'prop-types';
import './DynamicTable.css';

export const DynamicTable = ({ data, onButtonClickDelete, onButtonClickUpdate, onButtonClickGetProperties,onButtonClickAdd }) => {
  if (!data || data.length === 0) {
    return <p>No data to display.</p>;
  }
  const keys = Object.keys(data[0]);

  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th  key={index}>{key}</th>
          ))}
          <th>Delete</th>
          <th>Edit</th>
          <th>Properties</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {keys.map((key, colIndex) => (
              <td  key={colIndex}>{row[key]}</td>
              // <td onClick={() => onButtonClickGetProperties()} key={colIndex}>{row[key]}</td>
            ))}
            <td>
              <button className='delete_button' onClick={() => onButtonClickDelete(row)}>Delete</button>
            </td>
            <td>
              <button className='edit_button' onClick={() => onButtonClickUpdate(row)}>Edit</button>
            </td>
            <td>
              <button className='property_button' onClick={() => onButtonClickGetProperties(row)}>Properties</button>
            </td>
            <td>
              <button className='add_student_to_course' onClick={() => onButtonClickAdd(row)}>AddSToC</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


DynamicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  onButtonClickDelete: PropTypes.func.isRequired, // Add a prop type for the button click handler
  onButtonClickUpdate: PropTypes.func.isRequired, // Add a prop type for the button click handler
};
