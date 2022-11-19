import { RefObject } from 'react';

import { getCurrentYear } from '../../../utils/date-utils';
import { YearAnyInput, YearFieldSet, YearInput, YearLabel } from './year-filter-style';

type YearFilterProps = {
  yearRef: RefObject<HTMLInputElement>;
  isAnyDate: boolean;
  setAnyDate: (isAnyDate: boolean) => void;
}


export const YearFilter = ({yearRef, isAnyDate, setAnyDate} : YearFilterProps) => {

  // const yearRef = useRef<HTMLInputElement>(null)

  const currentYear = getCurrentYear();
  const maxYear = currentYear + 1;

  const handleChange = () => setAnyDate(!isAnyDate);


  return (
    <YearFieldSet>
      <legend> Год</legend>
      <YearLabel>
        <YearInput
          ref={yearRef}
          min={1900}
          max={maxYear}
          defaultValue={currentYear}
          disabled={isAnyDate}
        />
      </YearLabel>
      <YearLabel>

        <YearAnyInput


          checked={isAnyDate}
          onChange={handleChange}


        />не важно
      </YearLabel>
    </YearFieldSet>
  );};

