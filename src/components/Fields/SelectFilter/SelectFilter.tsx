import React, { ChangeEvent } from 'react';

import { FilterType } from '../../../Types/FilterTypes';

type Props = {
  onFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
export const SelectFilter: React.FC<Props> = ({ onFilterChange }) => (
  <div className="select is-link">
    <select onChange={onFilterChange}>
      <option value={FilterType.All}>
        Show all
      </option>

      <option value={FilterType.Active}>
        Show active
      </option>

      <option value={FilterType.Completed}>
        Show completed
      </option>
    </select>
  </div>
);
