import PropTypes from 'prop-types';

import { FaTimes } from 'react-icons/fa';

import '@components/posts/modal-wrappers/reaction-wrapper/ReactionWrapper.scss';

const ReactionWrapper = ({ children, closeModal }) => {
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-wrapper-container">
          <div className="modal-wrapper-container-header">
            {children[0]}
            <button onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
          <hr />
          <div className="modal-wrapper-container-body">{children[1]}</div>
        </div>
        <div className="modal-bg"></div>
      </div>
    </>
  );
};

ReactionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func
};

export default ReactionWrapper;
