import React from 'react';
import { withRouter } from 'react-router-dom';

class ShelfFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookshelf_title: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        // e.preventDefault();
        const title = Object.assign({}, this.state);
        this.props.createShelf(title);
    }

    render() {
        return (
            <div className="create-new-shelf">
                <form onSubmit={this.handleSubmit} className="create-shelf-box">
                    <div className="create-shelf">
                        <label className="shelf-title-field">
                            <input type="text"
                                placeholder="Shelf Title"
                                value={this.state.bookshelf_title}
                                onChange={this.update('bookshelf_title')}
                            />
                        </label>
                        <input className="shelf-create-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(ShelfFormContainer);
