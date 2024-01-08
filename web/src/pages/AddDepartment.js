import React, {Component} from "react";
import { variables } from "../Variables";

export class AddDepartment extends Component {

    render(){
        const {
            departments,
            modalTitle,
            DepartmentCode,
            DepartmentName
        } = this.state;
        
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">

                                    <div className="p-2 w-50 bd-highlight">

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Department Name</span>
                                            <input type="text" className="form-control"
                                                value={DepartmentName}
                                                onChange={this.changeDepartmentName} />
                                        </div>

                                        {DepartmentCode === 0 ?
                                            <button type="button"
                                                className="btn btn-primary float-start"
                                                onClick={() => this.createClick()}
                                            >Create</button>
                                            : null}

                                        {DepartmentCode !== 0 ?
                                            <button type="button"
                                                className="btn btn-primary float-start"
                                                onClick={() => this.updateClick()}
                                            >Update</button>
                                            : null}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}