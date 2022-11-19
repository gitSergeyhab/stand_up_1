import { useState, useRef, FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import { EventType, FilterName } from '../../const/const';
import { EventStatusFilter } from './event-status-filter/event-status-filter';
import { FilterForm, SubmitButton } from './filter-style';
import { YearFilter } from './year-filter/year-filter';


const connectSearchStr = (strings: string[]) => `?${strings.filter((item) => item).join('&')}`;

type GetSearchParams = {
  year?: string;
  isAnyDate?: boolean;
  currentEventType?: string;
}

const getSearch = ({year, isAnyDate, currentEventType} : GetSearchParams) => {
  const yearStr = year ? `year=${year}` : '';
  const searchYear = isAnyDate ? '' : yearStr;
  const searchStatus = currentEventType ? `status=${currentEventType}` : '';

  return connectSearchStr([searchYear, searchStatus]);
};


export const Filter = ({filters} : {filters: string[] }) => {

  const yearRef = useRef<HTMLInputElement>(null);
  const [currentEventType, setEventType] = useState<string>(EventType.Planned);
  const [isAnyDate, setAnyDate] = useState(true);

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();
    const filterSearch = getSearch({year: yearRef.current?.value, isAnyDate, currentEventType});
    navigate(filterSearch);
  };


  const eventStatusFilter = filters.some((item) => item === FilterName.EventStatus) ?
    <EventStatusFilter currentEventType={currentEventType} setEventType={setEventType}/> :
    null;


  const yearFilter = filters.some((item) => item === FilterName.Year) ?
    <YearFilter isAnyDate={isAnyDate} yearRef={yearRef} setAnyDate={setAnyDate}/> :
    null;

  return (
    <FilterForm onSubmit={handleSubmit}>

      {eventStatusFilter}
      {yearFilter}

      <SubmitButton>искать</SubmitButton>

    </FilterForm>
  );};
