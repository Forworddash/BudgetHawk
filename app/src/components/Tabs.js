import React, { Component, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const TabContent = ({ label }) => {
  const LazyComponent = lazy(() => import(`./${label}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ selectedTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { selectedTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={selectedTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== selectedTab) return undefined;
            return <TabContent label={selectedTab} key={selectedTab} />;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
