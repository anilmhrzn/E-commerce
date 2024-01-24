import Proptypes from 'prop-types'
const AlertMsg = ({message}) => {
    
  return (
    <>
      <div
        className={`fixed top-1 left-1 bg-yellow-100 border-t border-b border-yellow-500 text-yellow-700 px-4 py-3`}
      >
        <p className="font-bold">Warning message!</p>
        <p className="text-sm">{message} !</p>
      </div>
    </>
  );
};

AlertMsg.propTypes = {
message:Proptypes.string.isRequired
}
export default AlertMsg;


