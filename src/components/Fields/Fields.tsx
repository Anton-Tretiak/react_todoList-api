import React, { ChangeEvent } from 'react';

import { SelectFilter } from './SelectFilter/SelectFilter';

type Props = {
  onFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
export const Fields: React.FC<Props> = ({ onFilterChange }) => (
  <div className="fields">
    <SelectFilter onFilterChange={onFilterChange} />
  </div>
);
