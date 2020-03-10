import React from 'react';

class CommentEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: '',
        }
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Enter your comment here..."
                        rows={5}
                        value={this.state.text}
                        onChange={this.handleTextChange.bind(this)}
                    />
                </div>
                <div>
                    <input
                        className="form-control"
                        placeholder="Enter your name"
                        value={this.state.author}
                        onChange={this.handleAuthorChange.bind(this)}>
                    </input>
                    <button type="button" className="btn btn-primary" onClick={this.handleCommentAdd.bind(this)}>Add</button>
                </div>
            </form>
        );
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleAuthorChange(event) {
        this.setState({ author: event.target.value });
    }

    handleCommentAdd() {
        var newComment = {
            text: this.state.text,
            author: this.state.author,
            id: Date.now()
        };

        this.props.onCommentAdd(newComment);
        this.setState({ text: '', author: '' });
    }
};

export default CommentEditor;