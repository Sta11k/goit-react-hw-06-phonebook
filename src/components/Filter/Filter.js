import s from './Filter.module.css';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { contactFilter } from '../../redux/app/app-phonebook-reducer.js';
function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

// const mapDispatchToProps = dispatch => {

//   return {
//     onChange: value => dispatch(contactFilter(value)),
//   };
// };
// export default connect(null, mapDispatchToProps)(Filter);
