import { ContentName } from '../../const/const';
import { TabLi, TabLink, TabPanelUl } from './top-tab-styles';


type DataTabType = {name: string; path: string}
type TabType = {name: string; path: string; loc: string}

const getTabs = (tabs: DataTabType[], type: ContentName, id: string) => tabs.map(({name, path}) => ({name, path, loc: `/${type}/${id}/${path}`}));


const Tab = ({tab, pathName} : {tab: TabType; pathName: string }) => {

  const active = tab.loc === pathName;

  return (
    <TabLi active={active}>
      <TabLink to={tab.loc}>{tab.name}</TabLink>
    </TabLi>
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
    <TabPanelUl>
      {tabsElements}
    </TabPanelUl>
  );
};
