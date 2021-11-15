import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/app/app-phonebook-actions';
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
const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
