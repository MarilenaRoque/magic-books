import PropTypes from 'prop-types';

function App(props) {
  const {title} = props;
  return (
    <>
      <h1> MagicBooks App</h1>
      <h2>{title}</h2>
    </>
  )
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
};