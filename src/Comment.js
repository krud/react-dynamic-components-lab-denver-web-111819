import React, { Component } from 'react';

export default class Comment extends Component {
  render(){
    return (
      <div className="comment">{this.prop.commentText}</div>
      )
  }
}
