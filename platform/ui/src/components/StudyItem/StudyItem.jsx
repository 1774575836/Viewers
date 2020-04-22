import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Icon } from '@ohif/ui';

const baseClasses =
  'first:border-0 border-t border-secondary-light cursor-pointer outline-none';

const StudyItem = ({
  date,
  description,
  numInstances,
  modalities,
  trackedSeries,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={classnames(
        isActive ? 'bg-secondary-dark' : 'bg-black hover:bg-secondary-main',
        baseClasses
      )}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="flex flex-col flex-1 px-4 pb-2">
        <div className="flex flex-row items-center justify-between pb-2 pt-2 pb-2">
          <div className="text-white text-base">{date}</div>
          <div className="flex flex-row items-center text-blue-300  text-base">
            <Icon name="group-layers" className="text-blue-300 mx-2 w-4" />
            {numInstances}
          </div>
        </div>
        <div className="flex flex-row py-1">
          <div className="text-blue-300 pr-5 text-xl">{modalities}</div>
          <div className="text-blue-300  text-base">{description}</div>
        </div>
      </div>
      {!!trackedSeries && (
        <div className="flex flex-2">
          <div
            className={classnames(
              'flex flex-row bg-secondary-main text-base text-white py-1 pl-2 pr-4 mt-2 ',
              isActive
                ? 'flex-1 border-t border-secondary-light justify-center'
                : 'rounded-sm mx-4 mb-4'
            )}
          >
            <Icon name="tracked" className="text-primary-light w-4 mr-2" />
            {trackedSeries} Tracked Series
          </div>
        </div>
      )}
    </div>
  );
};

StudyItem.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modalities: PropTypes.string.isRequired,
  numInstances: PropTypes.number.isRequired,
  trackedSeries: PropTypes.number,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default StudyItem;
