import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';


class ItemModal extends Component {
    state = {
        modal: false,
        name: ""
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();

        const newItem = {
            name: this.state.name
        }

        //add item using addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? <Button
                    color="warning"
                    block
                    style={{ marginBottom: "2rem" }}
                    onClick={this.toggle}
                >Add Item</Button> : <h4 className="text-warning mb-3 ml-4">Please Log In to Manage Items</h4>}



                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader className="itemHeader" toggle={this.toggle}>
                        Add To Ingredient List
                    </ModalHeader>
                    <ModalBody>
                        <Form className="itemModal" onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Ingredients List</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Ingredient"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="warning"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >
                                    Add Ingredient
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal);