/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

var React = require('react');
var StyleEdit = require('./StyleEdit');
var BoxInspector = require('./BoxInspector');

function shallowClone(obj) {
  var nobj = {};
  for (var n in obj) {
    nobj[n] = obj[n];
  }
  return nobj;
}

class NativeStyler extends React.Component {
  defaultProps;
  _styleGet;

  constructor(props) {
    super(props);
    this.state = {style: null, measuredLayout: null};
  }

  componentWillMount() {
    this._styleGet = this._styleGet.bind(this);
    if (this.props.supportsMeasure) {
      this.props.bridge.on('rn-style:measure', this._styleGet);
      this.props.bridge.send('rn-style:measure', this.props.id);
    } else {
      this.props.bridge.call('rn-style:get', this.props.id, style => {
        this.setState({style});
      });
    }
  }

  componentWillUnmount() {
    if (this.props.supportsMeasure) {
      this.props.bridge.off('rn-style:measure', this._styleGet);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id === this.props.id) {
      return;
    }
    this.setState({style: null});
    this.props.bridge.send('rn-style:get', nextProps.id);

    if (this.props.supportsMeasure) {
      this.props.bridge.send('rn-style:measure', nextProps.id);
    } else {
      this.props.bridge.call('rn-style:get', nextProps.id, style => {
        this.setState({style});
      });
    }
  }

  _styleGet(result) {
    var {style, measuredLayout} = result;
    this.setState({style, measuredLayout});
  }

  _handleStyleChange(attr, val) {
    if (this.state.style) {
      this.state.style[attr] = val;
    }
    this.props.bridge.send('rn-style:set', {id: this.props.id, attr, val});
    this.setState({style: this.state.style});
  }

  _handleStyleRename(oldName, newName, val) {
    var style = shallowClone(this.state.style);
    delete style[oldName];
    style[newName] = val;
    this.props.bridge.send('rn-style:rename', {id: this.props.id, oldName, newName, val});
    this.setState({style});
  }

  render() {
    if (!this.state.style) {
      return <em>loading</em>;
    }
    return (
      <div style={styles.container}>
        {this.state.measuredLayout && <BoxInspector {...this.state.measuredLayout} />}
        <StyleEdit
          style={this.state.style}
          onRename={this._handleStyleRename.bind(this)}
          onChange={this._handleStyleChange.bind(this)}
        />
      </div>
    );
  }
}

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

module.exports = NativeStyler;
