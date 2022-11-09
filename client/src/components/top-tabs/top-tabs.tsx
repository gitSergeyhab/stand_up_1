import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { ContentName } from '../../const/const';

import './tabs.css';


type DataTabType = {name: string; path: string}
type TabType = {name: string; path: string; loc: string}

const getTabs = (tabs: DataTabType[], type: ContentName, id: string) => tabs.map(({name, path}) => ({name, path, loc: `/${type}/${id}/${path}`}));


const Tab = ({tab, pathName} : {tab: TabType; pathName: string }) => {

  const className = tab.loc === pathName ? 'active' : '';

  return (
    <ListItem sx={{ display: 'flex', justifyContent:'center', pb: '16px', pt: '16px', width: '100%'}} className={className}>
      <Link to={tab.loc}>{tab.name}</Link>
    </ListItem>
  );
};


type TopTabsProps = {
  id: string | undefined;
  type: ContentName;
  pathname: string;
  tabData: DataTabType[];
}

export const TopTabs = ({tabProps} : {tabProps : TopTabsProps}) => {

  const { id = '1', type, pathname, tabData } = tabProps;

  const tabs = getTabs(tabData, type, id);

  const tabsElements = tabs.map((item) => <Tab key={item.path} tab={item} pathName={pathname}/>);
  return (
    <List className={'tab-panel'} sx={{ mb: '30px', pb: 0, pt: 0 }}>
      {tabsElements}
    </List>
  );
};
