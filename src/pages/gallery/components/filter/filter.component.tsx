import React, { FC, ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { PicObj } from '@src/core/interfaces/draw.interface';
import { setSortEmail } from '@actions/draw.actions';
import { useTypedSelector } from '@src/core/hooks/use-typed-selector.hook';
import { selectSortEmail } from '@src/core/selectors/draw.selectors';
import { Select, Button } from './filter.styles';

interface FilterComponentProps {
  arrOfPics: Array<PicObj>;
}

const FilterComponent: FC<FilterComponentProps> = ({
  arrOfPics,
}): JSX.Element => {
  const uniqueUsers: Array<string> = Array.from(
    new Set(arrOfPics.map(({ user }) => user))
  );
  const [selectedEmail, setSelectedEmail] = useState('');
  const sortEmail = useTypedSelector(selectSortEmail);
  const dispatch = useDispatch();

  const chooseUser = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value.includes('All')) {
      setSelectedEmail('');
    } else if (e.target.value.includes('@')) {
      setSelectedEmail(e.target.value);
    }
  };

  const saveSortEmail = () => dispatch(setSortEmail(selectedEmail));

  return (
    <div>
      <Select onChange={chooseUser}>
        <option>All</option>
        {uniqueUsers.length !== 0 &&
          uniqueUsers.map((user) => (
            <option
              key={user}
              value={user}
              selected={user === sortEmail && true}
            >
              {user}
            </option>
          ))}
      </Select>
      <Button onClick={saveSortEmail}>Sort</Button>
    </div>
  );
};

export default FilterComponent;
