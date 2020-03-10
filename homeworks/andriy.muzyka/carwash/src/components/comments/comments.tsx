import React from 'react';
import './Comments.css';

interface CommentsState {
  commentsArray: { author: string, text: string }[]
}

export default class Comments extends React.Component <any, CommentsState> {
  authorRef: any = React.createRef();
  textRef: any = React.createRef();
  constructor(props: any) {
    super(props);
    this.state = {
      commentsArray: [
        { author: 'Andriy', text: 'comment1'},
        { author: 'Max', text: 'comment2'},
        { author: 'Rostyk', text: 'comment3'}
      ]
    };
  }

  render() {
    return (
      <section className="App-Comments">
        <ul>
          {this.state.commentsArray.map((comment, i) => {
            console.log("Entered");
            return (<li key={i}><span className="author">{comment.author}</span>{comment.text}<span className="close" onClick={e => this.remove(e)}>X</span></li>)
            // return (<Answer key={i} answer={answer} />)
          })}
        </ul>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Author:
            <input ref={this.authorRef} type="text" name="author" />
          </label>
          <label>
            Comment:
            <input ref={this.textRef} type="text" name="comment" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }

  remove(e: any) {
    e.target.parentNode.remove();
  }

  componentWillUpdate() {
    this.authorRef.current.value = '';
    this.textRef.current.value = '';
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.setState((state, props) => ({
      commentsArray: state.commentsArray.concat([{ author: this.authorRef.current.value, text: this.textRef.current.value }])
    }));
  }
}
