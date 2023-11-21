import { useState } from 'react';

interface useTabProps {
  tabList: string[];
  defaultTabIndex: number;
}

const useTab = ({ tabList, defaultTabIndex }: useTabProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabIndex);

  return {
    activeTab: tabList[activeTabIndex],
    setActiveTab: setActiveTabIndex,
  };
};

export default useTab;
