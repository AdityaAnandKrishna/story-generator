"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom");

var IndicatorsSelector = require("../../components/indicators_selector"),
    StatesSelector     = require("../../components/states_selector"),
    Report             = require("../../components/report");

var SideNavigationTemplate = function (self) {
  if (self.state.showSideNavigation) {
    return (
      <div className="bg-primary side-nav">
        <div className="project-info">
          <div className="project-title">CBGA Story Generator</div>
          <div className="project-description">
            Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem
            pretium metus, quis mollis
          </div>
        </div>
        <IndicatorsSelector location={self.props.location}
                            params={self.props.params}
                            indicators={self.state.indicators}
                            onClick={(event) => self.toggleSideNavigation()} />

        <div className="credits">
          <div className="credits-info">
            <span>@credits</span>
            <span href="javascript:void(0)">DataKind Bangalore</span>
          </div>
          <div className="credits-links">
            <span className="credits-links-item">Share</span>
            <span className="credits-links-item">About</span>
            <span className="credits-links-item">ContactUs</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="side-nav-menu-icon" onClick={(event) => self.toggleSideNavigation()}>
      <span className="glyphicon glyphicon-menu-hamburger"></span>
    </div>
  );
};

var Template = function (self) {
  var contentCLass = "content ";
  if (self.state.showSideNavigation) {
    contentCLass = contentCLass + "side-nav-active";
  }
  return (
    /* jshint ignore:start */
    /* jscs ignore:start */
    <div className="body">
      {SideNavigationTemplate(self)}
      <div className={contentCLass}>
        <div className="content-body">
          <Report location={self.props.location}
                  params={self.props.params}
                  states={self.state.states}
                  indicators={self.state.indicators}
                  selectedStates={self.state.selectedStates} />

          <div className="report-meta">
            <StatesSelector location={self.props.location}
                            params={self.props.params}
                            states={self.state.states} />
          </div>
        </div>
        <div className="content-footer">
          <div className="information hr">
            <div className="information-title">Description</div>
            <div className="information-content">
              Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem
              pretium metus, quis mollis
            </div>
          </div>
          <div className="information">
            <div className="information-title">Notes</div>
            <div className="information-content">
              Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem
              pretium metus, quis mollis
            </div>
          </div>
        </div>
      </div>
    </div>
    /* jshint ignore:end */
    /* jscs ignore:end */
  );
};

module.exports = Template;
