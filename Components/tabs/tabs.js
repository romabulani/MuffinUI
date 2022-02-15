const defaultTabsArray = document.querySelectorAll('.tab-default');
const leftIconsTabsArray = document.querySelectorAll('.tab-icon-left');
const topIconsTabsArray = document.querySelectorAll('.tab-icon-top');

defaultTabsArray.forEach((tab) =>
  tab.addEventListener('click', () => onClickTabHandler(defaultTabsArray, tab))
);
leftIconsTabsArray.forEach((tab) =>
  tab.addEventListener('click', () =>
    onClickTabHandler(leftIconsTabsArray, tab)
  )
);
topIconsTabsArray.forEach((tab) =>
  tab.addEventListener('click', () => onClickTabHandler(topIconsTabsArray, tab))
);

const onClickTabHandler = (arr, activeTab) => {
  arr.forEach((tab) => tab.classList.remove('tab-active'));
  activeTab.classList.add('tab-active');
};
