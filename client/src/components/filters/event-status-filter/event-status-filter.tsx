import { ChangeEventHandler } from 'react';
import { EventType } from '../../../const/const';
import { EventStatusFieldSet } from './event-status-filter-style';

// import { EventType } from '../../const/const';


const EventName: {[key: string] : string} = {
  [EventType.Canceled] : 'Отмененные',
  [EventType.Ended]: 'Прошедшие',
  [EventType.Planned]: 'Планируемые'

};


type OneEventTypeProps = {
  value: string;
  currentValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const OneEventType = (props : OneEventTypeProps) => {

  const {value, currentValue, onChange} = props;


  return (
    <label>
      <input
        onChange={onChange}
        name="event-type"
        type="radio"
        value={value}
        defaultChecked={value === currentValue}

      />
      <span>{EventName[value]}</span>
    </label>
  );
};

type EventStatusFilterProps = {
  currentEventType: string;
  setEventType: (type: string) => void;
}

export const EventStatusFilter = ({currentEventType, setEventType} : EventStatusFilterProps) => {


  const handleChangeEventType: ChangeEventHandler<HTMLInputElement> = (evt) => setEventType(evt.currentTarget.value);

  const eventTypeElements = Object.values(EventType).map(
    (item) => <OneEventType key={item} value={item} onChange={handleChangeEventType} currentValue={currentEventType} />
  );


  return (
    <EventStatusFieldSet>

      {eventTypeElements}

    </EventStatusFieldSet>
  );
};
